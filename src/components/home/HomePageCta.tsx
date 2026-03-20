"use client"

import Link from "next/link"
import { SignOutButton } from "@insforge/react/components"
import { useAuth } from "@insforge/nextjs"

import { buttonVariants } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

/**
 * SignedIn/SignedOut both render null while auth is loading, which hides all
 * links on hard refresh. useAuth + explicit loading UI keeps the row stable.
 */
export function HomePageCta() {
  const { isLoaded, isSignedIn } = useAuth()

  if (!isLoaded) {
    return (
      <div
        className="flex min-h-8 flex-wrap items-center justify-center gap-3"
        aria-busy="true"
        aria-label="Loading account"
      >
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-20" />
      </div>
    )
  }

  if (isSignedIn) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/dashboard" className={cn(buttonVariants())}>
          Dashboard
        </Link>
        <SignOutButton
          afterSignOutUrl="/"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Log out
        </SignOutButton>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Link href="/sign-in" className={cn(buttonVariants())}>
        Sign in
      </Link>
      <Link
        href="/sign-up"
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        Sign up
      </Link>
      <Link
        href="/dashboard"
        className={cn(buttonVariants({ variant: "ghost" }))}
      >
        Dashboard
      </Link>
    </div>
  )
}
