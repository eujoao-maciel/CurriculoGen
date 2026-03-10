import { z } from 'zod'

export const titleValidation = z.object({
   title: z.string().min(1, 'The title field is required.'),
})

export const idValidation = z.object({
   resumeId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid id.'),
})

export const updateResumeValidation = z.object({
   resumeId: z.string().min(1, 'ResumeId is required.'),
   resumeData: z.string().min(1, 'Resume data is required.'),
   removeBackground: z.enum(['true', 'false']).optional(),
})
