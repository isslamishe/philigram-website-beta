"use client";

import { useEffect, useState } from "react";
import Switcher from "@/commponents/sections/blogs/landing.switcher";
import BlogsSection from "@/commponents/sections/blogs/blogs.section";
import {
  ArticlesLoading,
  ArticlesEmpty,
  ArticlesError,
} from "@/commponents/sections/blogs/articles-states";
import { useMainContext } from "@/lib/context/main.context";
import { getArticles } from "@/lib/api/articles";

export default function Blogs() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState(null); // null = all categories
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0); // bump to retry

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await getArticles(
          { category: category ?? undefined, limit: 20 },
          { signal: controller.signal },
        );
        setArticles(data ?? []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to load articles");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    load();
    return () => controller.abort();
  }, [category, reloadKey]);

  useEffect(() => {
    setCurrentNav("");
    setCurrentSubNav("");
  }, []);

  return (
    <div className="flex flex-col bg-white gap-0 relative w-screen min-h-screen">
      {loading && <ArticlesLoading />}

      {!loading && error && (
        <ArticlesError
          message={error}
          onRetry={() => setReloadKey((k) => k + 1)}
        />
      )}

      {!loading && !error && articles.length === 0 && (
        <ArticlesEmpty
          onReset={category ? () => setCategory(null) : undefined}
        />
      )}

      {!loading && !error && articles.length > 0 && (
        <>
          {" "}
          <Switcher
            articles={articles}
            category={category}
            onCategoryChange={setCategory}
          />
          <BlogsSection articles={articles} />
        </>
      )}
    </div>
  );
}
