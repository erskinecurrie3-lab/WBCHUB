import { NextResponse } from "next/server"

/**
 * Insforge platform webhooks (auth, storage, etc.).
 * Verify signatures and forward to domain logic.
 */
export async function POST() {
  return NextResponse.json(
    { ok: false, message: "Not implemented" },
    { status: 501 }
  )
}
