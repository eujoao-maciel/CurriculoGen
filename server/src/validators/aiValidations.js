import { z } from "zod"

export const userContentValidation = z.object({
    userContent: z
        .string()
        .min(1, "userContent is required.")
        .max(500, "userContent must be less than 500 characters."),
})

export const uploadResumeValidation = z.object({
    title: z.string().min(1, "Title is required"),
})
