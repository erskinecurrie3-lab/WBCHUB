"use client"

import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import {
  InsforgeBrowserProvider,
  type InitialAuthState,
} from "@insforge/nextjs"

import { Toaster } from "@/components/ui/sonner"
import { insforge } from "@/lib/insforge"

export function Providers({
  children,
  initialState,
}: {
  children: React.ReactNode
  initialState: InitialAuthState
}) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <InsforgeBrowserProvider
          client={insforge}
          afterSignInUrl="/"
          initialState={initialState}
        >
          {children}
          <Toaster />
        </InsforgeBrowserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
