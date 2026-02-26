import { Router } from "express"
import { registerUser, loginUser } from '../controllers/userController.js'

export const authRoutes = Router()

authRoutes.post('/register', registerUser)
authRoutes.post('/login', loginUser)
