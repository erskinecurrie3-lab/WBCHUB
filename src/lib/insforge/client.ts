import { createClient, type InsForgeClient } from "@insforge/sdk"

/**
 * Browser / shared SDK client (anon key, public reads).
 * Replaces `createBrowserClient` from `@supabase/ssr`.
 */
export const insforge: InsForgeClient = createClient({
  baseUrl: process.env.NEXT_PUBLIC_INSFORGE_BASE_URL ?? "",
  anonKey: process.env.NEXT_PUBLIC_INSFORGE_ANON_KEY,
})

/** Alias for teams migrating from Supabase naming. */
export const createBrowserInsforge = (): InsForgeClient => insforge
