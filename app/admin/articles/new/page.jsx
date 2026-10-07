"use client";

// app/admin/articles/new/page.jsx
// Creates an article. The editor outputs TipTap/ProseMirror JSON, which is the
// same format your BlogContent component renders.

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEditor, EditorContent, Extension } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TiptapImage from "@tiptap/extension-image";
import TiptapLink from "@tiptap/extension-link";
import Content from "@/commponents/sections/blogs/blog/content"; // your BlogContent
import { createArticleAction } from "@/app/admin/actions";

/* ---------------- helpers ---------------- */

// "Game Design" -> "game-design"
function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "-") // note the "u" flag
    .replace(/^-+|-+$/g, "");
}

const isUrl = (v) => /^https?:\/\//i.test(v);

// drop empty optional fields so the API doesn't receive "" or null
function clean(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) =>
      Array.isArray(v)
        ? v.length > 0
        : v !== "" && v !== null && v !== undefined,
    ),
  );
}

const EMPTY_FORM = {
  title: "",
  subTitle: "",
  description: "",
  category: "",
  topics: "", // comma separated
  image: "",
  readingTime: "",
  ctaText: "",
  ctaLink: "",
  seoTitle: "",
  seoDescription: "",
  seoKeywords: "", // comma separated
  published: true,
};

const editorStyles = `
.tiptap { outline: none; min-height: 40svh; padding: 1rem; }
.tiptap h2 { font-size: 1.6rem; font-weight: 700; margin: 1.5rem 0 .75rem; }
.tiptap h3 { font-size: 1.25rem; font-weight: 700; margin: 1.25rem 0 .5rem; }
.tiptap p { margin: .75rem 0; line-height: 1.7; }
.tiptap ul { list-style: disc; padding-inline-start: 1.5rem; margin: .75rem 0; }
.tiptap ol { list-style: decimal; padding-inline-start: 1.5rem; margin: .75rem 0; }
.tiptap blockquote { border-inline-start: 4px solid #C8AA6E; padding-inline-start: 1rem; font-style: italic; margin: 1rem 0; }
.tiptap pre { background: #403E37; color: #fff; padding: 1rem; border-radius: .5rem; overflow-x: auto; margin: 1rem 0; }
.tiptap code { background: rgba(200,170,110,.15); padding: 0 .25rem; border-radius: .25rem; }
.tiptap pre code { background: none; padding: 0; }
.tiptap img { max-width: 100%; height: auto; margin: 1rem auto; display: block; border-radius: .5rem; }
.tiptap a { color: #A47B27; text-decoration: underline; }
.tiptap hr { border-color: #C8AA6E; margin: 1.5rem 0; }
`;

/* ---------------- small UI pieces ---------------- */

function Field({ label, hint, required, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-[#403E37]">
        {label} {required && <span className="text-red-600">*</span>}
      </span>
      {children}
      {hint && <span className="text-xs text-zinc-500">{hint}</span>}
    </label>
  );
}

const inputClass =
  "w-full border border-zinc-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-[#C8AA6E] focus:ring-1 focus:ring-[#C8AA6E]";

function ToolButton({ onClick, active, disabled, title, children }) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()} // keep the editor selection
      onClick={onClick}
      className={`min-w-8 cursor-pointer rounded px-2 py-1 text-sm transition disabled:opacity-40 ${
        active
          ? "bg-[#C8AA6E] text-white"
          : "text-[#403E37] hover:bg-[#C8AA6E]/20"
      }`}
    >
      {children}
    </button>
  );
}
// Puts an empty paragraph after the current top-level block
// (code block, quote, list, ...) and moves the cursor into it.
function exitToNewParagraph(editor) {
  const { $to } = editor.state.selection;
  if ($to.depth < 1) return false;
  const pos = $to.after(1);
  return editor
    .chain()
    .insertContentAt(pos, { type: "paragraph" })
    .focus(pos + 1)
    .run();
}

const EditorKeys = Extension.create({
  name: "editorKeys",
  priority: 1000,
  addKeyboardShortcuts() {
    return {
      // Ctrl/Cmd + Enter: escape any block
      "Mod-Enter": ({ editor }) => exitToNewParagraph(editor),

      // Enter while inline code is active: new line WITHOUT the code mark
      Enter: ({ editor }) => {
        if (editor.isActive("code")) {
          return editor.chain().splitBlock().unsetCode().run();
        }
        return false;
      },
    };
  },
});
/* ---------------- page ---------------- */

export default function NewArticlePage() {
  const router = useRouter();
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [previewDoc, setPreviewDoc] = useState(null); // null = editor view
  const [showAuth, setShowAuth] = useState(false);
  const [auth, setAuth] = useState({ username: "", password: "" });
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Underline,
      TiptapImage,
      TiptapLink.configure({ openOnClick: false, autolink: true }),
      EditorKeys,
    ],
    content: "",
    immediatelyRender: false, // required for Next.js SSR
    shouldRerenderOnTransaction: true, // keeps toolbar buttons in sync
    editorProps: { attributes: { class: "tiptap" } },
  });

  const set = (field) => (e) =>
    setForm((prev) => ({
      ...prev,
      [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  /* ---- toolbar actions ---- */

  function addLink() {
    const previous = editor.getAttributes("link").href;
    const url = window.prompt("Link URL", previous ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    if (!/^(https?:\/\/|mailto:)/i.test(url)) {
      toast.error("Link must start with https://, http:// or mailto:");
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }

  function addImage() {
    const src = window.prompt("Image URL (https://...)");
    if (!src) return;
    if (!isUrl(src)) {
      toast.error("Image URL must start with http:// or https://");
      return;
    }
    const alt = window.prompt("Caption / alt text (optional)") ?? "";
    editor.chain().focus().setImage({ src, alt }).run();
  }

  function togglePreview() {
    setPreviewDoc((prev) => (prev ? null : editor.getJSON()));
  }

  /* ---- submit ---- */

  function validate() {
    if (!form.title.trim()) return "Title is required";
    if (!slugify(form.category))
      return "Category is required (letters or numbers)";
    if (!form.description.trim()) return "Description is required";
    if (!isUrl(form.image.trim())) return "Cover image must be an http(s) URL";
    if (form.ctaLink.trim() && !isUrl(form.ctaLink.trim()))
      return "CTA link must be an http(s) URL";

    if (form.ctaLink.trim() && !form.ctaText.trim())
      return "CTA text is required when a CTA link is set";
    if (!editor || editor.isEmpty) return "The article content is empty";
    if (!form.topics.split(",").map(slugify).filter(Boolean).length)
      return "At least one topic is required";
    return null;
  }

  function buildPayload() {
    const words = editor.getText().trim().split(/\s+/).filter(Boolean).length;

    return clean({
      title: form.title.trim(),
      subTitle: form.subTitle.trim(),
      description: form.description.trim(),
      category: slugify(form.category),
      topic: form.topics.split(",").map(slugify).filter(Boolean),
      image: form.image.trim(),
      readingTime:
        Number(form.readingTime) || Math.max(1, Math.ceil(words / 200)),
      content: editor.getJSON(),
      ctaText: form.ctaText.trim(),
      ctaLink: form.ctaLink.trim(),
      seoTitle: form.seoTitle.trim() || form.title.trim(),
      seoDescription: form.seoDescription.trim() || form.description.trim(),
      seoKeywords: form.seoKeywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean),
      published: form.published,
    });
  }

  // Step 1: the main form only validates, then opens the popup
  function handleSubmit(e) {
    e.preventDefault();
    if (saving) return;

    const problem = validate();
    if (problem) {
      toast.error(problem);
      return;
    }

    setAuth({ username: "", password: "" });
    setShowAuth(true);
  }

  // Step 2: the popup sends the article together with the admin credentials
  async function confirmAuth(e) {
    e.preventDefault();
    if (saving) return;

    if (!auth.username.trim() || !auth.password) {
      toast.error("Enter the admin username and password");
      return;
    }

    setSaving(true);
    const result = await createArticleAction(buildPayload(), {
      username: auth.username.trim(),
      password: auth.password,
    });
    setSaving(false);

    if (!result.ok) {
      toast.error(result.error || "Could not save the article");
      setAuth((a) => ({ ...a, password: "" })); // clear the password, keep the popup open
      return;
    }

    setShowAuth(false);
    setAuth({ username: "", password: "" });
    toast.success(form.published ? "Article published" : "Saved as draft");

    if (form.published) {
      router.push(`/blog/${result.data.id}`);
    } else {
      setForm(EMPTY_FORM);
      editor.commands.clearContent();
      setPreviewDoc(null);
    }
  }

  /* ---- render ---- */

  return (
    <>
      {" "}
      <div className="min-h-screen w-screen bg-zinc-50 py-[12svh]">
        <style>{editorStyles}</style>

        <form
          onSubmit={handleSubmit}
          className="mx-auto flex w-[92%] max-w-4xl flex-col gap-8"
        >
          <h1 className="font-serif72 text-3xl font-semibold text-[#403E37]">
            New article
          </h1>

          {/* main info */}
          <section className="flex flex-col gap-4 border border-zinc-200 bg-white p-5">
            <Field label="Title" required>
              <input
                className={inputClass}
                value={form.title}
                onChange={set("title")}
              />
            </Field>

            <Field label="Subtitle">
              <input
                className={inputClass}
                value={form.subTitle}
                onChange={set("subTitle")}
              />
            </Field>

            <Field
              label="Description"
              required
              hint="Shown in the article list."
            >
              <textarea
                rows={3}
                className={inputClass}
                value={form.description}
                onChange={set("description")}
              />
            </Field>

            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Category"
                required
                hint={
                  form.category
                    ? `Saved as: ${slugify(form.category)}`
                    : "e.g. game-design"
                }
              >
                <input
                  className={inputClass}
                  value={form.category}
                  onChange={set("category")}
                />
              </Field>

              <Field
                label="Topics"
                hint="Comma separated, e.g. rpg, open-world"
              >
                <input
                  className={inputClass}
                  value={form.topics}
                  onChange={set("topics")}
                />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_10rem]">
              <Field label="Cover image URL" required>
                <input
                  className={inputClass}
                  placeholder="https://..."
                  value={form.image}
                  onChange={set("image")}
                />
              </Field>

              <Field label="Reading time (min)" hint="Empty = automatic">
                <input
                  type="number"
                  min="1"
                  className={inputClass}
                  value={form.readingTime}
                  onChange={set("readingTime")}
                />
              </Field>
            </div>

            {isUrl(form.image.trim()) && (
              // plain <img>: preview only, the host may not be configured in next.config
              <img
                src={form.image.trim()}
                alt=""
                className="h-48 w-full rounded object-cover object-top"
              />
            )}
          </section>

          {/* content */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#403E37]">
                Content <span className="text-red-600">*</span>
              </span>
              <button
                type="button"
                onClick={togglePreview}
                className="cursor-pointer border border-[#C8AA6E] px-4 py-1 text-sm text-[#A47B27] transition hover:bg-[#C8AA6E] hover:text-white"
              >
                {previewDoc ? "Back to editor" : "Preview"}
              </button>
            </div>

            {previewDoc ? (
              <div className="min-h-[40svh] overflow-hidden border border-zinc-200 bg-white p-6">
                <Content article={{ content: previewDoc }} />
                <div className="clear-both" />
              </div>
            ) : (
              <div className="border border-zinc-300 bg-white">
                {editor && (
                  <div className="sticky top-[10svh] z-10 flex flex-wrap items-center gap-1 border-b border-zinc-200 bg-white p-2">
                    <ToolButton
                      title="Heading 2"
                      active={editor.isActive("heading", { level: 2 })}
                      onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 2 }).run()
                      }
                    >
                      H2
                    </ToolButton>
                    <ToolButton
                      title="Heading 3"
                      active={editor.isActive("heading", { level: 3 })}
                      onClick={() =>
                        editor.chain().focus().toggleHeading({ level: 3 }).run()
                      }
                    >
                      H3
                    </ToolButton>
                    <span className="mx-1 h-5 w-px bg-zinc-300" />
                    <ToolButton
                      title="Bold"
                      active={editor.isActive("bold")}
                      onClick={() => editor.chain().focus().toggleBold().run()}
                    >
                      <b>B</b>
                    </ToolButton>
                    <ToolButton
                      title="Italic"
                      active={editor.isActive("italic")}
                      onClick={() =>
                        editor.chain().focus().toggleItalic().run()
                      }
                    >
                      <i>I</i>
                    </ToolButton>
                    <ToolButton
                      title="Underline"
                      active={editor.isActive("underline")}
                      onClick={() =>
                        editor.chain().focus().toggleUnderline().run()
                      }
                    >
                      <u>U</u>
                    </ToolButton>
                    <ToolButton
                      title="Strikethrough"
                      active={editor.isActive("strike")}
                      onClick={() =>
                        editor.chain().focus().toggleStrike().run()
                      }
                    >
                      <s>S</s>
                    </ToolButton>
                    <ToolButton
                      title="Inline code"
                      active={editor.isActive("code")}
                      onClick={() => editor.chain().focus().toggleCode().run()}
                    >
                      {"</>"}
                    </ToolButton>
                    <span className="mx-1 h-5 w-px bg-zinc-300" />
                    <ToolButton
                      title="Bullet list"
                      active={editor.isActive("bulletList")}
                      onClick={() =>
                        editor.chain().focus().toggleBulletList().run()
                      }
                    >
                      • List
                    </ToolButton>
                    <ToolButton
                      title="Numbered list"
                      active={editor.isActive("orderedList")}
                      onClick={() =>
                        editor.chain().focus().toggleOrderedList().run()
                      }
                    >
                      1. List
                    </ToolButton>
                    <ToolButton
                      title="Quote"
                      active={editor.isActive("blockquote")}
                      onClick={() =>
                        editor.chain().focus().toggleBlockquote().run()
                      }
                    >
                      “ ”
                    </ToolButton>
                    <ToolButton
                      title="Code block"
                      active={editor.isActive("codeBlock")}
                      onClick={() =>
                        editor.chain().focus().toggleCodeBlock().run()
                      }
                    >
                      Code
                    </ToolButton>
                    <ToolButton
                      title="Divider"
                      onClick={() =>
                        editor.chain().focus().setHorizontalRule().run()
                      }
                    >
                      ―
                    </ToolButton>
                    <span className="mx-1 h-5 w-px bg-zinc-300" />
                    <ToolButton
                      title="Link"
                      active={editor.isActive("link")}
                      onClick={addLink}
                    >
                      Link
                    </ToolButton>
                    <ToolButton title="Image" onClick={addImage}>
                      Image
                    </ToolButton>
                    <span className="mx-1 h-5 w-px bg-zinc-300" />
                    <ToolButton
                      title="Undo"
                      disabled={!editor.can().undo()}
                      onClick={() => editor.chain().focus().undo().run()}
                    >
                      ↶
                    </ToolButton>
                    <ToolButton
                      title="Redo"
                      disabled={!editor.can().redo()}
                      onClick={() => editor.chain().focus().redo().run()}
                    >
                      ↷
                    </ToolButton>
                    <ToolButton
                      title="Exit block and start a new paragraph (Ctrl/Cmd + Enter)"
                      onClick={() => exitToNewParagraph(editor)}
                    >
                      ↵ New line
                    </ToolButton>
                  </div>
                )}
                <EditorContent editor={editor} />
              </div>
            )}
          </section>

          {/* call to action */}
          <section className="grid gap-4 border border-zinc-200 bg-white p-5 md:grid-cols-2">
            <Field label="CTA text" hint="Button label, e.g. Join the Beta">
              <input
                className={inputClass}
                value={form.ctaText}
                onChange={set("ctaText")}
              />
            </Field>
            <Field label="CTA link">
              <input
                className={inputClass}
                placeholder="https://..."
                value={form.ctaLink}
                onChange={set("ctaLink")}
              />
            </Field>
          </section>

          {/* SEO */}
          <section className="flex flex-col gap-4 border border-zinc-200 bg-white p-5">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#A47B27]">
              SEO (optional, defaults to title and description)
            </span>
            <Field label="SEO title">
              <input
                className={inputClass}
                value={form.seoTitle}
                onChange={set("seoTitle")}
              />
            </Field>
            <Field label="SEO description">
              <textarea
                rows={2}
                className={inputClass}
                value={form.seoDescription}
                onChange={set("seoDescription")}
              />
            </Field>
            <Field label="SEO keywords" hint="Comma separated">
              <input
                className={inputClass}
                value={form.seoKeywords}
                onChange={set("seoKeywords")}
              />
            </Field>
          </section>

          {/* publish */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <label className="flex cursor-pointer items-center gap-2 text-sm text-[#403E37]">
              <input
                type="checkbox"
                checked={form.published}
                onChange={set("published")}
                className="h-4 w-4 accent-[#A47B27]"
              />
              Publish now (uncheck to save as a draft)
            </label>

            <button
              type="submit"
              disabled={saving}
              className="cursor-pointer border border-[#C8AA6E] bg-[#C8AA6E] px-10 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-transparent hover:text-[#A47B27] disabled:cursor-wait disabled:opacity-60"
            >
              {saving
                ? "Saving..."
                : form.published
                  ? "Publish article"
                  : "Save draft"}
            </button>
          </div>
        </form>
      </div>
      {showAuth && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => !saving && setShowAuth(false)}
        >
          <form
            onSubmit={confirmAuth}
            onClick={(e) => e.stopPropagation()}
            className="flex w-full max-w-sm flex-col gap-4 border border-zinc-200 bg-white p-6 shadow-xl"
          >
            <h2 className="font-serif72 text-xl font-semibold text-[#403E37]">
              Admin authentication
            </h2>
            <p className="text-sm text-zinc-600">
              Enter the admin credentials to{" "}
              {form.published ? "publish" : "save"} this article.
            </p>

            <Field label="Username" required>
              <input
                autoFocus
                autoComplete="username"
                className={inputClass}
                value={auth.username}
                onChange={(e) =>
                  setAuth((a) => ({ ...a, username: e.target.value }))
                }
              />
            </Field>

            <Field label="Password" required>
              <input
                type="password"
                autoComplete="current-password"
                className={inputClass}
                value={auth.password}
                onChange={(e) =>
                  setAuth((a) => ({ ...a, password: e.target.value }))
                }
              />
            </Field>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                disabled={saving}
                onClick={() => setShowAuth(false)}
                className="cursor-pointer border border-zinc-300 px-5 py-2 text-sm text-[#403E37] transition hover:bg-zinc-100 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="cursor-pointer border border-[#C8AA6E] bg-[#C8AA6E] px-6 py-2 text-sm font-semibold text-white transition hover:bg-transparent hover:text-[#A47B27] disabled:cursor-wait disabled:opacity-60"
              >
                {saving ? "Verifying..." : "Confirm"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
