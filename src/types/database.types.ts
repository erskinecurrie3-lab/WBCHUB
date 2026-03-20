/**
 * Database row types for Insforge / PostgREST.
 * Regenerate when schema changes (Insforge dashboard / migrations).
 */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = Record<string, never>
