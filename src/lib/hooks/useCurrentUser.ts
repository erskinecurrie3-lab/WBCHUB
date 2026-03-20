"use client"

import { useUser } from "@insforge/nextjs"

export function useCurrentUser() {
  return useUser()
}
