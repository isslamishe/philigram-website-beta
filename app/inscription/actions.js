export async function createPreInscription(data) {
  let res;
  try {
    res = await fetch("/api/pre-inscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    // fetch itself failed: offline, DNS, server down
    throw new ApiError("NETWORK", 0);
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new ApiError(body.code || "UNKNOWN", res.status);
  }

  return res.json();
}
