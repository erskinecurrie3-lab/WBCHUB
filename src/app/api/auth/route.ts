import { createAuthRouteHandlers } from "@insforge/nextjs/api"

const handlers = createAuthRouteHandlers({
  baseUrl:
    process.env.INSFORGE_BASE_URL ??
    process.env.NEXT_PUBLIC_INSFORGE_BASE_URL ??
    "",
})

export const GET = handlers.GET
export const POST = handlers.POST
export const DELETE = handlers.DELETE
