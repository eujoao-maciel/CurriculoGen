import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { createResume } from '../controllers/resumeController.js'

export const resumeRoutes = Router()

resumeRoutes.post('/create', authMiddleware, createResume)
