"use client"

import { SignOutButton } from "@insforge/react/components"
import { useAuth, useUser, UserButton } from "@insforge/nextjs"

import { buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

/**
 * Insforge `UserButton` is null when `user` is missing and can be easy to miss
 * (avatar-only). Always show a labeled Log out when signed in; add `UserButton`
 * when `user` exists for profile menu.
 */
export function Header() {
  const { isLoaded, isSignedIn } = useAuth()
  const { user } = useUser()

  return (
    <header className="bg-background flex h-14 items-center justify-end gap-3 border-b px-6">
      {!isLoaded ? (
        <Skeleton className="h-8 w-28" />
      ) : isSignedIn ? (
        <>
          {user?.email ? (
            <span className="text-muted-foreground hidden max-w-[220px] truncate text-sm sm:inline">
              {user.email}
            </span>
          ) : null}
          {user ? <UserButton afterSignOutUrl="/" /> : null}
          <SignOutButton
            afterSignOutUrl="/"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            Log out
          </SignOutButton>
        </>
      ) : null}
    </header>
  )
}
