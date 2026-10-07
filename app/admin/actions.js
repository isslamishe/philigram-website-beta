// app/admin/actions.js
// Write operations run on the Next.js server: no CORS, and the secret key
// never reaches the browser. Every action returns { ok, data } or { ok, error }
// (thrown errors get hidden by Next.js in production, returned ones don't).
"use server";

import { revalidatePath } from "next/cache";

const API_URL = process.env.API_URL; // https://api.ascendiarise.com
const API_KEY = process.env.API_KEY; // secret, server-only

/* ---------------- API helpers ---------------- */

async function call(path, method, body, credentials) {
  const headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY,
  };

  // The backend does the real authentication
  if (credentials?.username || credentials?.password) {
    headers.Authorization =
      "Basic " +
      Buffer.from(`${credentials.username}:${credentials.password}`).toString(
        "base64",
      );
  }

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    redirect: "follow",
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 401) {
      throw new Error("Invalid admin username or password");
    }

    let detail = "";
    try {
      const json = await res.json();
      detail =
        typeof json.detail === "string"
          ? json.detail
          : JSON.stringify(json.detail); // FastAPI 422: list of field errors
    } catch {}
    throw new Error(`API ${res.status}: ${detail}`);
  }
  return res.status === 204 ? null : res.json();
}

async function run(fn) {
  try {
    return { ok: true, data: await fn() };
  } catch (err) {
    console.error("admin action failed:", err.message); // never log credentials
    return { ok: false, error: err.message || "Unknown error" };
  }
}

/* ---------------- actions ---------------- */

export async function createArticleAction(data, credentials) {
  return run(async () => {
    const created = await call("/articles/", "POST", data, credentials);
    revalidatePath("/blog");
    return created;
  });
}

export async function updateArticleAction(id, data, credentials) {
  return run(async () => {
    const updated = await call(`/articles/${id}`, "PUT", data, credentials);
    revalidatePath("/blog");
    revalidatePath(`/blog/${id}`);
    return updated;
  });
}

export async function deleteArticleAction(id, credentials) {
  return run(async () => {
    await call(`/articles/${id}`, "DELETE", undefined, credentials);
    revalidatePath("/blog");
    return null;
  });
}
