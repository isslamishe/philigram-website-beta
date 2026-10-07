"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useMemo, useState } from "react";
import { t } from "@/lib/i18n/translation"; // adjust path to your json file
import { useMainContext } from "@/lib/context/main.context";

/* ---------------- helpers ---------------- */

// Plain text of any node: heading.content[0].text -> "A World Without Boundaries"
function getText(node) {
  if (!node) return "";
  if (node.type === "text") return node.text ?? "";
  return (node.content ?? []).map(getText).join("");
}

// "A World Without Boundaries" -> "a-world-without-boundaries" (keeps accents-free latin + arabic)
function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// only allow safe link protocols
function safeHref(href) {
  return /^(https?:\/\/|mailto:|\/|#)/i.test(href ?? "") ? href : "#";
}

/* ---------------- inline text + marks ---------------- */

function renderText(node) {
  let el = node.text ?? "";

  for (const mark of node.marks ?? []) {
    switch (mark.type) {
      case "bold":
        el = <strong>{el}</strong>;
        break;
      case "italic":
        el = <em>{el}</em>;
        break;
      case "underline":
        el = <u>{el}</u>;
        break;
      case "strike":
        el = <s>{el}</s>;
        break;
      case "code":
        el = (
          <code className="rounded bg-[#C8AA6E]/15 px-1 py-0.5 text-[0.9em]">
            {el}
          </code>
        );
        break;
      case "link":
        el = (
          <a
            href={safeHref(mark.attrs?.href)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A47B27] underline underline-offset-2"
          >
            {el}
          </a>
        );
        break;
      default:
        break;
    }
  }
  return el;
}

/* ---------------- block renderer ---------------- */

function renderChildren(node, ctx) {
  return (node.content ?? []).map((child, i) => (
    <Fragment key={i}>{renderNode(child, ctx)}</Fragment>
  ));
}

const headingSizes = {
  1: "text-[clamp(1.4rem,6svw,2rem)] md:text-4xl",
  2: "text-[clamp(1rem,5svw,1.5rem)] md:text-3xl",
  3: "text-[clamp(1rem,4svw,1.25rem)] md:text-2xl",
  4: "text-lg md:text-xl",
  5: "text-base md:text-lg",
  6: "text-base",
};

function renderNode(node, ctx) {
  switch (node.type) {
    case "text":
      return renderText(node);

    case "paragraph":
      return (
        <p className="mb-6 text-lg leading-8">{renderChildren(node, ctx)}</p>
      );

    case "heading": {
      const level = Math.min(Math.max(node.attrs?.level ?? 2, 1), 6);
      const Tag = `h${level}`;
      return (
        <Tag
          id={ctx.idFor(node)}
          className={`mb-6 mt-14 scroll-mt-24 font-bold tracking-wide ${headingSizes[level]}`}
        >
          {renderChildren(node, ctx)}
        </Tag>
      );
    }

    case "bulletList":
      return (
        <ul className="mb-6 list-disc ps-6 space-y-2 text-lg leading-8">
          {renderChildren(node, ctx)}
        </ul>
      );

    case "orderedList":
      return (
        <ol className="mb-6 list-decimal ps-6 space-y-2 text-lg leading-8">
          {renderChildren(node, ctx)}
        </ol>
      );

    case "listItem":
      return <li>{renderChildren(node, ctx)}</li>;

    case "blockquote":
    case "quote":
      return (
        <blockquote className="my-12 border-s-4 border-black/30 bg-white/5 px-6 py-5 text-xl italic leading-8 md:text-2xl">
          {renderChildren(node, ctx)}
        </blockquote>
      );

    case "codeBlock":
      return (
        <pre className="my-8 overflow-x-auto rounded-xl bg-[#403E37] p-4 text-sm text-white">
          <code>{getText(node)}</code>
        </pre>
      );

    case "horizontalRule":
      return <hr className="my-10 border-[#C8AA6E]" />;

    case "hardBreak":
      return <br />;

    case "image": {
      const src = node.attrs?.src;
      const alt = node.attrs?.alt ?? "";
      if (!src) return null;
      return (
        <figure className="my-12 flex justify-center flex-col items-center overflow-hidden rounded-2xl">
          <Image
            unoptimized
            src={src}
            alt={alt}
            width={600}
            height={335}
            className="h-auto rounded-2xl object-cover"
          />
          {alt && (
            <figcaption className="mt-3 text-center text-sm text-zinc-500">
              {alt}
            </figcaption>
          )}
        </figure>
      );
    }

    default:
      // unknown node: still show its text instead of dropping it
      return node.content ? <>{renderChildren(node, ctx)}</> : null;
  }
}

/* ---------------- component ---------------- */

export default function BlogContent({ article }) {
  const { language } = useMainContext();
  const isRTL = language === "ar";

  const blocks = article?.content?.content ?? [];

  // table of contents: one entry per heading, with a stable unique id
  const headings = useMemo(
    () =>
      blocks
        .map((node, index) => ({ node, index }))
        .filter(({ node }) => node.type === "heading")
        .map(({ node, index }) => {
          const text = getText(node);
          return {
            node,
            text,
            level: node.attrs?.level ?? 2,
            id: `${slugify(text) || "section"}-${index}`,
          };
        }),
    [blocks],
  );

  // lets the heading renderer find the id we computed for its node
  const ctx = useMemo(() => {
    const ids = new Map(headings.map((h) => [h.node, h.id]));
    return { idFor: (node) => ids.get(node) };
  }, [headings]);

  // highlight the heading currently on screen
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -70% 0px" },
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (blocks.length === 0) return null;

  return (
    <div dir={"ltr"} className="w-[95%]  relative gap-2.5 min-h-[10svh]">
      {/*table of contents sidebar */}
      {headings.length > 0 && (
        <div
          className={` float-left w-full md:w-auto min-h-[30svh] md:min-h-[50svh] lg:min-h-[70svh]`}
        >
          <div className="flex flex-col items-center justify-center gap-[2svh] border-e border-[#A4A4A4] text-[#403E37] w-full md:w-[35svw] lg:w-[20svw] me-[5svw] mb-[5svh] h-auto md:min-h-[50svh] md:max-h-[70svh] md:overflow-y-auto">
            <div className="uppercase text-[clamp(1rem,7dvw,1.7rem)] md:text-[clamp(1rem,3dvw,1.2rem)] font-semibold w-[90%]">
              {t("blog.content.titlesLabel", language)}
            </div>

            <div className="w-[85%] min-w-0 h-auto flex flex-col gap-[0.8rem]">
              {headings.map((h) => (
                <Link
                  key={h.id}
                  href={`#${h.id}`}
                  className={`w-full min-w-0 flex flex-row items-start gap-2 md:text-[clamp(0.7rem,3dvw,0.9rem)] lg:text-[clamp(0.8rem,3dvw,1rem)] lowercase text-start cursor-pointer ${
                    h.level > 2 ? "ps-3" : ""
                  } ${activeId === h.id ? "text-[#A47B27] font-semibold" : ""}`}
                >
                  <div className="mt-[0.5em] w-1 h-1 rotate-45 shrink-0 bg-[#C8AA6E]" />
                  <span className="min-w-0 break-words leading-snug">
                    {h.text}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/*content */}
      <div className="w-[100%] text-black min-h-full">
        {blocks.map((block, index) => (
          <Fragment key={index}>{renderNode(block, ctx)}</Fragment>
        ))}
      </div>
    </div>
  );
}
