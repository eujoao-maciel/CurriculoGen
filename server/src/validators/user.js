import { z } from "zod"

export const registerSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("email is invalid"),
  password: z.string().min(6, "password must be at least 6 characters")
})

export const loginSchema = z.object({
  email: z.string().email("email is invalid"),
  password: z.string().min(6, "password must be at least 6 characters")
})

