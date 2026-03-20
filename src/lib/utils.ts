import { clsx, type ClassValue } from "clsx"
import { format } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(
  input: Date | string | number,
  pattern = "PP"
): string {
  const d = input instanceof Date ? input : new Date(input)
  return format(d, pattern)
}
