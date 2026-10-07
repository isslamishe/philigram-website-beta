"use client";

import { useEffect, useState } from "react";
import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation"; // adjust path to your json file
import Link from "next/link";
// translation if the key exists, otherwise a fallback text
function text(key, fallback, language) {
  const out = t(key, language);
  return out && out !== key ? out : fallback;
}

// shared dark block, same look as the LoadingScreen
function Shell({ children, ...props }) {
  return (
    <div
      className="flex min-h-[100svh] w-full fixed top-0 z-90 flex-col items-center justify-center gap-8 bg-black px-6 text-center"
      {...props}
    >
      {children}
    </div>
  );
}

function Diamond({ className = "" }) {
  return (
    <div className={`rotate-45 bg-[#C8AA6E] ${className}`} aria-hidden="true" />
  );
}

/* ---------------- loading ---------------- */

export function ArticlesLoading() {
  const { language } = useMainContext();
  const [progress, setProgress] = useState(0);

  // fake progress that slows down at 90% and waits for the real data
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev >= 90 ? prev : Math.min(prev + Math.random() * 6 + 1, 90),
      );
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <Shell role="status" aria-live="polite">
      <div
        className="text-3xl md:text-5xl font-serif72 bg-clip-text text-transparent transition-all duration-500"
        style={{
          backgroundImage: "linear-gradient(to right, white, white)",
          backgroundSize: `${progress}% 100%`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#444",
          WebkitBackgroundClip: "text",
        }}
      >
        ASCENDIA RISE
      </div>

      {/* thin gold progress line */}
      <div className="h-px w-48 overflow-hidden bg-white/15">
        <div
          className="h-full bg-[#C8AA6E] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="text-xs uppercase tracking-[0.3em] text-white/50">
        {text("blog.state.loading", "Loading articles", language)}
      </span>
    </Shell>
  );
}

/* ---------------- no articles ---------------- */

export function ArticlesEmpty({ onReset }) {
  const { language } = useMainContext();

  return (
    <Shell>
      <div className="flex items-center gap-3">
        <Diamond className="h-2 w-2" />
        <Diamond className="h-3 w-3" />
        <Diamond className="h-2 w-2" />
      </div>

      <h2 className="font-serif72 text-2xl md:text-4xl font-semibold uppercase text-white">
        {text("blog.state.emptyTitle", "No articles found", language)}
      </h2>

      <p className="max-w-md text-sm md:text-base text-white/60">
        {text(
          "blog.state.emptyText",
          "Nothing has been published here yet. Come back soon, new stories are on their way.",
          language,
        )}
      </p>

      {onReset && (
        <button
          onClick={onReset}
          className="cursor-pointer border border-[#C8AA6E] px-8 py-3 text-sm uppercase tracking-widest text-[#C8AA6E] transition hover:bg-[#C8AA6E] hover:text-black"
        >
          {text("blog.state.showAll", "Show all articles", language)}
        </button>
      )}
    </Shell>
  );
}

export function ArticaleNotFound({ onReset }) {
  const { language } = useMainContext();

  const buttonClass =
    "cursor-pointer border border-[#C8AA6E] px-8 py-3 text-sm uppercase tracking-widest text-[#C8AA6E] transition hover:bg-[#C8AA6E] hover:text-black";

  return (
    <Shell role="alert">
      <div className="flex items-center gap-3">
        <Diamond className="h-2 w-2" />
        <Diamond className="h-3 w-3" />
        <Diamond className="h-2 w-2" />
      </div>

      <h2 className="font-serif72 text-2xl md:text-4xl font-semibold uppercase text-white">
        {text("blog.state.notFoundTitle", "Article not found", language)}
      </h2>

      <p className="max-w-md text-sm md:text-base text-white/60">
        {text(
          "blog.state.notFoundText",
          "This article doesn't exist or is no longer available. It may have been moved or removed.",
          language,
        )}
      </p>

      {onReset ? (
        <button onClick={onReset} className={buttonClass}>
          {text("blog.state.backToBlog", "Back to blog", language)}
        </button>
      ) : (
        <Link href="/blog" className={buttonClass}>
          {text("blog.state.backToBlog", "Back to blog", language)}
        </Link>
      )}
    </Shell>
  );
}

/* ---------------- error ---------------- */

export function ArticlesError({ message, onRetry }) {
  const { language } = useMainContext();

  return (
    <Shell role="alert">
      <div className="flex items-center gap-3">
        <Diamond className="h-2 w-2 opacity-50" />
        <Diamond className="h-3 w-3" />
        <Diamond className="h-2 w-2 opacity-50" />
      </div>

      <h2 className="font-serif72 text-2xl md:text-4xl font-semibold uppercase text-white">
        {text("blog.state.errorTitle", "Something went wrong", language)}
      </h2>

      <p className="max-w-md text-sm md:text-base text-white/60">
        {text(
          "blog.state.errorText",
          "We couldn't load the articles. Check your connection and try again.",
          language,
        )}
      </p>

      {message && (
        <p className="text-xs text-white/30" dir="ltr">
          {message}
        </p>
      )}

      {onRetry && (
        <button
          onClick={onRetry}
          className="cursor-pointer border border-[#C8AA6E] px-8 py-3 text-sm uppercase tracking-widest text-[#C8AA6E] transition hover:bg-[#C8AA6E] hover:text-black"
        >
          {text("blog.state.retry", "Try again", language)}
        </button>
      )}
    </Shell>
  );
}
