import { Router } from 'express'
import {
   registerUser,
   loginUser,
   getUserById,
   getUserResumes,
} from '../controllers/userController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { validateRequest } from '../middlewares/validateRequest.js'
import { registerSchema, loginSchema } from '../validators/userValidations.js'

export const authRoutes = Router()

authRoutes.post('/register', validateRequest(registerSchema), registerUser)
authRoutes.post('/login', validateRequest(loginSchema), loginUser)
authRoutes.get('/data', authMiddleware, getUserById)
authRoutes.get('/resumes', authMiddleware, getUserResumes)
