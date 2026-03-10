import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { upload } from '../middlewares/multer.js'
import { validateRequest } from '../middlewares/validateRequest.js'
import {
   createResume,
   deleteResume,
   getResumeById,
   getPublicResumeById,
   updateResume
} from '../controllers/resumeController.js'
import {
   titleValidation,
   idValidation,
   updateResumeValidation
} from '../validators/resumeValidations.js'

export const resumeRoutes = Router()

resumeRoutes.post(
   '/create',
   authMiddleware,
   validateRequest(titleValidation),
   createResume
)
resumeRoutes.put(
   '/update',
   authMiddleware,
   validateRequest(updateResumeValidation),
   upload.single('image'),
   updateResume
)
resumeRoutes.delete(
   '/delete/:resumeId',
   authMiddleware,
   validateRequest(idValidation, 'params'),
   deleteResume
)
resumeRoutes.get(
   '/resumes/:resumeId',
   authMiddleware,
   validateRequest(idValidation, 'params'),
   getResumeById
)
resumeRoutes.get(
    "/public/:resumeId",
    validateRequest(idValidation, "params"),
    getPublicResumeById
)
