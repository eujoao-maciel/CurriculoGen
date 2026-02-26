import { User } from '../models/User.js'
import { hashPassword } from '../utils/password.js'
import { registerSchema, loginSchema } from '../validators/user.js'
import jwt from 'jsonwebtoken'

const generateToken = (userId) => {
   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: '7d',
   })
   return token
}

const normalizeEmail = (email) => {
   return email.toLowerCase()
}

export const registerUser = async (req, res) => {
   try {
      const parsed = registerSchema.safeParse(req.body)
      if (!parsed.success) {
         const errors = parsed.error.issues.map((issue) => ({
            field: issue.path.join('.'),
            message: issue.message,
         }))
         return res
            .status(400)
            .json({ error: 'validation failed.', details: errors })
      }

      const { name, email, password } = parsed.data
      const normalizedEmail = normalizeEmail(email)

      const existingUser = await User.findOne({ email: normalizedEmail })
      if (existingUser) {
         return res.status(409).json({ error: 'user already exists.' })
      }

      const hashedPassword = await hashPassword(password)

      const newUser = await User.create({
         name,
         email: normalizedEmail,
         password: hashedPassword,
      })

      const token = generateToken(newUser._id)
      newUser.password = undefined

      return res.status(201).json({
         message: 'user registered successfully.',
         token,
         user: newUser,
      })
   } catch (error) {
      return res.status(500).json({ error: 'failed to register user.' })
   }
}

export const loginUser = async (req, res) => {
   try {
      const parsed = loginSchema.safeParse(req.body)
      if (!parsed.success) {
         const errors = parsed.error.issues.map((issue) => ({
            field: issue.path.join('.'),
            message: issue.message,
         }))

         return res
            .status(400)
            .json({ error: 'validation failed.', details: errors })
      }

      const { email, password } = parsed.data
      const normalizedEmail = normalizeEmail(email)

      const user = await User.findOne({ email: normalizedEmail })
      if (!user) {
         return res.status(400).json({ message: 'Invalid email or password.' })
      }

      const passwordMatches = await user.comparePassword(password)
      if (!passwordMatches) {
         return res.status(400).json({ message: 'Invalid email or password.' })
      }

      const token = generateToken(user._id)
      user.password = undefined

      return res.status(200).json({
         message: 'Login successful.',
         token,
         user,
      })
   } catch (error) {
      return res.status(500).json({ error: 'failed to login user.' })
   }
}
