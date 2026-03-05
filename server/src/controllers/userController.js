import { User } from '../models/User.js'
import { Resume } from '../models/Resume.js'
import { hashPassword } from '../utils/password.js'
import { registerSchema, loginSchema } from '../validators/userValidations.js'
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
      const { name, email, password } = req.validatedInputs 
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
      return res.status(400).json({
         message: error.message,
         errors: error.details,
      })
   }
}

export const loginUser = async (req, res) => {
   try {
      const { email, password } = req.validatedInputs
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
      return res.status(400).json({
        message: error.message,
        errors: error.details
      })
   }
}

export const getUserById = async (req, res) => {
   try {
      const userId = req.userId

      const user = await User.findById(userId)

      if (!user) {
         return res.status(404).json({ message: 'User not found.' })
      }

      user.password = undefined

      return res.status(200).json({ user })
   } catch (error) {
      return res.status(400).json({ message: error.message })
   }
}

export const getUserResumes = async (req, res) => {
   try {
      const userId = req.userId

      const resumes = await Resume.find({ userId })

      return res.status(200).json({ resumes })
   } catch (error) {
      return res.status(400).json({ message: error.message })
   }
}
