// app/blog/[id]/page.jsx  (server component, no "use client")
import { cache } from "react";

import ArticlePage from "@/commponents/sections/blogs/blog/article.page";
import { ArticaleNotFound } from "@/commponents/sections/blogs/articles-states";
// Server-side fetch: needs the ABSOLUTE api url (server-only env var).
// NEXT_PUBLIC_API_URL="/api" is relative and only works in the browser.
const API_URL = process.env.API_URL; // https://api.ascendiarise.com

// cache() makes generateMetadata and the page share ONE request
const getArticle = cache(async (id) => {
  if (!/^\d+$/.test(id)) return null; // ids are numbers

  const res = await fetch(`${API_URL}/articles/${id}`, {
    redirect: "follow",
    next: { revalidate: 60 },
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load article ${id}: ${res.status}`);
  return res.json();
});

export async function generateMetadata({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  if (!article) {
    return { title: "Article introuvable | Ascendia Rise" };
  }

  const title = article.seoTitle || article.title;
  const description = article.seoDescription || article.description;

  return {
    title,
    description,
    keywords: article.seoKeywords,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: article.createdAt,
      modifiedTime: article.updatedAt,
      images: article.image ? [{ url: article.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const article = await getArticle(id);

  // hide unpublished articles from the public site
  if (!article || article.published === false) return <ArticaleNotFound />;

  return <ArticlePage article={article} />;
}
