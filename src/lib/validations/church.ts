import { z } from "zod"

export const churchSchema = z.object({
  name: z.string().min(1),
})

export type ChurchInput = z.infer<typeof churchSchema>
