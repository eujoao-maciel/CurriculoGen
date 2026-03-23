import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { validateRequest } from '../middlewares/validateRequest.js'
import {
   userContentValidation,
   uploadResumeValidation,
} from '../validators/aiValidations.js'
import {
   enhanceProfessionalSummary,
   enhanceJobDescription,
   uploadResume
} from '../controllers/aiController.js'

export const aiRoutes = Router()

aiRoutes.post(
   '/enhance-professional-summary',
   validateRequest(userContentValidation),
   enhanceProfessionalSummary
)
aiRoutes.post(
   '/enhance-job-desc',
   validateRequest(userContentValidation),
   enhanceJobDescription
)
aiRoutes.post(
   '/upload-resume',
   authMiddleware,
   validateRequest(uploadResumeValidation),
   uploadResume
)
