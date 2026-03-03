import { z } from 'zod'

export const titleValidation = z.object({
  title: z.string().min(1, 'The title field is required.')
})
