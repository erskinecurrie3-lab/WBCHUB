import type { InsforgeUser } from "@insforge/shared"

/**
 * WBC Hub roles — enforce everywhere (see `.cursorrules`).
 * Map from Insforge `user.profile` / `profiles.role` once wired in Insforge.
 *
 * Pure helpers (safe for Client Components). For server: `@/lib/auth/roles-server`.
 */
export type UserRole =
  | "admin"
  | "worship_builder"
  | "apprentice"
  | "church_leader"
  | "donor"

const ALL_ROLES: readonly UserRole[] = [
  "admin",
  "worship_builder",
  "apprentice",
  "church_leader",
  "donor",
] as const

function isUserRole(value: string): value is UserRole {
  return (ALL_ROLES as readonly string[]).includes(value)
}

/** Read role from Insforge user profile (`profile.role` — adjust when schema is fixed). */
export function roleFromInsforgeUser(user: InsforgeUser | null): UserRole | null {
  if (!user?.profile || typeof user.profile !== "object") return null
  const profile = user.profile as Record<string, unknown>
  const raw = profile.role
  if (typeof raw !== "string" || !isUserRole(raw)) return null
  return raw
}

export function getRolesFromUser(user: InsforgeUser | null): UserRole[] {
  const r = roleFromInsforgeUser(user)
  return r ? [r] : []
}

export function isAdmin(role: UserRole | null): boolean {
  return role === "admin"
}

/** Certified trainer (`worship_builder`). */
export function isBuilder(role: UserRole | null): boolean {
  return role === "worship_builder"
}

/** Trainee (`apprentice`). */
export function isLearner(role: UserRole | null): boolean {
  return role === "apprentice"
}

export function isChurchLeader(role: UserRole | null): boolean {
  return role === "church_leader"
}

export function isDonor(role: UserRole | null): boolean {
  return role === "donor"
}

export function assertRole(user: InsforgeUser | null, role: UserRole): void {
  const current = roleFromInsforgeUser(user)
  if (current !== role) {
    throw new Error(`Expected role ${role}`)
  }
}
