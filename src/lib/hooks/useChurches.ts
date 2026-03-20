"use client"

/** React Query hooks for churches — wire to Insforge `database.from('churches')`. */
export function useChurches() {
  return { data: [], isLoading: false }
}
