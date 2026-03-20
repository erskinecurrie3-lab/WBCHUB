import { NextResponse } from "next/server"

/** Assessment summarizer agent (Insforge AI / edge function — implement). */
export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Not implemented" },
    { status: 501 }
  )
}
