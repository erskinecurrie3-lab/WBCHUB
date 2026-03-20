import { z } from "zod"

export const engagementSchema = z.object({
  summary: z.string().optional(),
})

export type EngagementInput = z.infer<typeof engagementSchema>
