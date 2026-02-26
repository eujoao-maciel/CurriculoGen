import { User } from "../models/User.js"
import { registerSchema } from "../validators/user.js"
import jwt from "jsonwebtoken"

const generateToken = (userId) => {
  const token = jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: '7d'}
  )
  return token 
}

export const registerUser = async (req, res) => {
  try {
    const parsed = registerSchema.safeParse(req.body)
    if (!parsed.success) {
      const errors = parsed.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message
      }))
      return res.status(400).json({ error: "validation failed", details: errors })
    }

    const { name, email, password } = parsed.data
    const normalizedEmail = email.toLowerCase()

    const existingUser = await User.findOne({ email: normalizedEmail })
    if (existingUser) {
      return res.status(409).json({ error: "user already exists" })
    }

    const newUser = await User.create({ name, email: normalizedEmail, password })

    const token = generateToken(newUser._id)
    newUser.password = undefined

    return res.status(201).json({
      message: "user registered successfully",
      token,
      user: newUser
    })
  } catch (error) {
    return res.status(500).json({ error: "failed to register user" })
  }
}
