import { Router } from 'express'
import { validateRequest } from '../middlewares/validateRequest.js'
import { userContentValidation } from '../validators/aiValidations.js'
import {
   enhanceProfessionalSummary,
   enhanceJobDescription,
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
