import { Router } from "express"
import { registerUser } from '../controllers/userController.js'

export const authRoutes = Router()

authRoutes.post('/register', registerUser)
