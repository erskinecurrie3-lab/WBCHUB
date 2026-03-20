/** Public route prefixes for Insforge + Next middleware (`src/middleware.ts`). */

/**
 * Paths that skip auth checks (must stay in sync with `src/middleware.ts`).
 * Note: the middleware `matcher` excludes the entire `/api` namespace, so
 * `/api/webhooks/*` and `/api/auth` never hit this middleware today — listed for
 * documentation and future matcher changes.
 */
export const insforgePublicRoutes = [
  "/",
  "/sign-in",
  "/sign-up",
  "/forgot-password",
  "/auth/callback",
] as const
