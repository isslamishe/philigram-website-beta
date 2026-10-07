// app/api/pre-inscription/route.js
// The browser posts to this same-origin route, and the Next.js server forwards it
// to FastAPI. Server-to-server requests aren't subject to CORS.

const UPSTREAM = process.env.API_URL; // https://api.ascendiarise.com (server-only)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ detail: "Invalid JSON" }, { status: 400 });
  }

  // never forward raw input: validate and keep only the two expected fields
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "")
    .trim()
    .toLowerCase();

  if (
    !name ||
    name.length > 100 ||
    !EMAIL_RE.test(email) ||
    email.length > 254
  ) {
    return Response.json({ detail: "Invalid name or email" }, { status: 400 });
  }

  try {
    const res = await fetch(`${UPSTREAM}/pre-inscription/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
      redirect: "follow",
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    // pass the API's status and body straight through (e.g. 409 already registered)
    return new Response(await res.text(), {
      status: res.status,
      headers: {
        "Content-Type": res.headers.get("content-type") ?? "application/json",
      },
    });
  } catch (err) {
    console.error("pre-inscription proxy error:", err);
    return Response.json({ detail: "Upstream unavailable" }, { status: 502 });
  }
}
