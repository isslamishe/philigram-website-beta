// lib/errors.js
const STATUS_FALLBACK = {
  400: "invalidData",
  409: "emailExists",
  429: "tooManyRequests",
  500: "server",
  502: "server",
  503: "server",
};

const CODE_TO_KEY = {
  EMAIL_EXISTS: "emailExists",
  INVALID_EMAIL: "invalidEmail",
  RATE_LIMITED: "tooManyRequests",
  NETWORK: "network",
};

export function getErrorKey(err) {
  const key =
    CODE_TO_KEY[err?.code] ||
    STATUS_FALLBACK[err?.status] ||
    (err?.name === "TypeError" ? "network" : null) ||
    "generic";
  return `inscription.form.errors.${key}`;
}
