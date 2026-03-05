import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { validateRequest } from '../middlewares/validateRequest.js'
import { createResume, deleteResume } from '../controllers/resumeController.js'
import {
   titleValidation,
   idValidation,
} from '../validators/resumeValidations.js'

export const resumeRoutes = Router()

resumeRoutes.post(
   '/create',
   authMiddleware,
   validateRequest(titleValidation),
   createResume
)
resumeRoutes.delete(
   '/delete/:resumeId',
   authMiddleware,
   validateRequest(idValidation, 'params'),
   deleteResume
)
