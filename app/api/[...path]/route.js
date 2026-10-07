// app/api/[...path]/route.js  (production version: read-only, allow-listed)

// Server-only env var (no NEXT_PUBLIC_ prefix), e.g. API_URL=https://api.ascendiarise.com
const UPSTREAM = process.env.API_URL;

// Only these backend paths can be reached through the proxy
const ALLOWED = [
  /^\/articles\/?$/, // list
  /^\/articles\/\d+\/?$/, // single article
];

export async function GET(request) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/api/, "");

  if (!ALLOWED.some((re) => re.test(path))) {
    return Response.json({ detail: "Not found" }, { status: 404 });
  }

  try {
    const res = await fetch(UPSTREAM + path + url.search, {
      redirect: "follow", // follow FastAPI's slash redirects on the server
      signal: AbortSignal.timeout(10_000), // don't hang forever if the API is down
      next: { revalidate: 60 }, // cache upstream responses for 60s
    });

    return new Response(res.body, {
      status: res.status,
      headers: {
        "Content-Type": res.headers.get("content-type") ?? "application/json",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch {
    return Response.json({ detail: "Upstream unavailable" }, { status: 502 });
  }
}

// No POST/PUT/DELETE exports: Next.js answers those with 405 automatically.
