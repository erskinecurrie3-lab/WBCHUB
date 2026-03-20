import { InsforgeMiddleware } from "@insforge/nextjs/middleware"

import { insforgePublicRoutes } from "@/lib/insforge/middleware"

/**
 * Insforge auth middleware (replaces Clerk).
 * Public: `/`, `/sign-in`, `/sign-up`, `/forgot-password`, `/auth/callback`.
 * `/api/*` is excluded via `matcher` (includes `/api/webhooks/*` and `/api/auth`).
 */
export default InsforgeMiddleware({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL ?? "",
  publicRoutes: [...insforgePublicRoutes],
  afterSignInUrl: "/dashboard",
})

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
