import { NextResponse } from "next/server"

/** Server-side PDF generation (@react-pdf/renderer — implement). */
export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Not implemented" },
    { status: 501 }
  )
}
