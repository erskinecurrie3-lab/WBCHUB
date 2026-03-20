import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { getAuthFromCookies } from "@insforge/nextjs"

import { Providers } from "./providers"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "WBC Hub",
  description: "WBC Hub application",
}

/** Root layout reads auth cookies for Insforge SSR hydration. */
export const dynamic = "force-dynamic"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = await getAuthFromCookies()

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  )
}
