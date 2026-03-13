import { z } from 'zod'

export const userContentValidation = z.object({
   userContent: z
      .string()
      .min(1, 'userContent is required.')
      .max(500, 'userContent must be less than 500 characters.'),
})
