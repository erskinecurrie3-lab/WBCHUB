import "server-only"

import { auth } from "@insforge/nextjs/server"
import { redirect } from "next/navigation"

import { type UserRole, roleFromInsforgeUser } from "@/lib/auth/roles"

/** Current user’s primary role (Server Components, Route Handlers, Server Actions). */
export async function getCurrentRole(): Promise<UserRole | null> {
  const { user } = await auth()
  return roleFromInsforgeUser(user)
}

/** Redirects to `/dashboard` if the user lacks one of `allowed` roles. */
export async function requireRole(
  allowed: readonly UserRole[]
): Promise<UserRole> {
  const role = await getCurrentRole()
  if (!role || !allowed.includes(role)) {
    redirect("/dashboard")
  }
  return role
}
