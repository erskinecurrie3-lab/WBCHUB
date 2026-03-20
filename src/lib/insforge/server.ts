import { createClient, type InsForgeClient } from "@insforge/sdk"
import { auth } from "@insforge/nextjs/server"

/**
 * Insforge client with the current session token (RSC, Route Handlers, Server Actions).
 * Replaces `createServerClient` from `@supabase/ssr`.
 */
export async function createServerInsforge(): Promise<InsForgeClient> {
  const { token } = await auth()

  return createClient({
    baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL ?? "",
    anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY,
    edgeFunctionToken: token ?? undefined,
  })
}
