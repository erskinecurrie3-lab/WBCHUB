import { z } from "zod"

export const assessmentSchema = z.object({
  notes: z.string().optional(),
})

export type AssessmentInput = z.infer<typeof assessmentSchema>
