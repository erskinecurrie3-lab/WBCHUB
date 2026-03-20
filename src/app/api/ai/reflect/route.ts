import { NextResponse } from "next/server"

/** Training reflection guide agent (scaffold). */
export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Not implemented" },
    { status: 501 }
  )
}
