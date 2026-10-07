// lib/api/articles.jsx
// Fetch helpers for the FastAPI /articles endpoints (plain JavaScript).

const API_URL = process.env.NEXT_PUBLIC_API_URL;

/* ---------- Internal helper ---------- */

export class ApiError extends Error {
  constructor(status, message, detail) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.detail = detail;
  }
}

async function request(path, init = {}) {
  console.log(API_URL);
  const hasBody = init.body !== undefined;

  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      ...(hasBody ? { "Content-Type": "application/json" } : {}),
      ...(init.headers ?? {}),
    },
  });

  if (!res.ok) {
    let detail;
    try {
      detail = (await res.json()).detail;
    } catch {
      /* non-JSON error body */
    }
    throw new ApiError(res.status, `Request failed: ${res.status}`, detail);
  }

  // DELETE may return 204 / empty body
  if (res.status === 204) return undefined;
  const text = await res.text();
  return text ? JSON.parse(text) : undefined;
}

/* ---------- Endpoint functions ---------- */

// GET /articles/
// params: { skip, limit, category, all }  (all = true includes unpublished)
export function getArticles(params = {}, init) {
  const qs = new URLSearchParams();
  if (params.skip !== undefined) qs.set("skip", String(params.skip));
  if (params.limit !== undefined) qs.set("limit", String(params.limit));
  if (params.category) qs.set("category", params.category);
  if (params.all) qs.set("all", "true");
  const query = qs.toString();
  return request(`/articles/${query ? `?${query}` : ""}`, init);
}

// GET /articles/{id}
export function getArticle(id, init) {
  return request(`/articles/${id}`, init);
}

// POST /articles/
export function createArticle(data) {
  return request("/articles/", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// PUT /articles/{id}  (partial update: only send the fields to change)
export function updateArticle(id, data) {
  return request(`/articles/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

// DELETE /articles/{id}
export function deleteArticle(id) {
  return request(`/articles/${id}`, { method: "DELETE" });
}

/* ---------- Usage examples ----------

// Server component (app/articles/page.jsx)
import { getArticles } from "@/lib/api/articles";
const articles = await getArticles({ limit: 10 }, { next: { revalidate: 60 } });

// Dynamic route (app/articles/[id]/page.jsx)
const article = await getArticle(params.id, { cache: "no-store" });

// Client component
"use client";
await createArticle({ title: "Hello", content: "...", is_published: true });
await updateArticle(3, { title: "New title" });
await deleteArticle(3);

*/
