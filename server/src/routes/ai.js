import { Router } from 'express'
import { validateRequest } from '../middlewares/validateRequest.js'
import { userContentValidation } from '../validators/aiValidations.js'
import { enhanceProfessionalSummary } from '../controllers/aiController.js'

export const aiRoutes = Router()

aiRoutes.post(
   '/enhance-job-desc',
   validateRequest(userContentValidation),
   enhanceProfessionalSummary
)
