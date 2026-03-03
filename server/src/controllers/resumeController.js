import { Resume } from '../models/Resume.js'
import { titleValidation } from '../validators/resumeValidations.js'

export const createResume = async (req, res) => {
   try {
      const userId = req.userId
      const validateData = titleValidation.safeParse(req.body)

      if (!validateData.success) {
         const errors = validateData.error.issues.map((issue) => ({
            field: issue.path.join('.'),
            message: issue.message,
         }))
         return res
            .status(400)
            .json({ error: 'validation failed.', details: errors })
      }

      const { title } = validateData.data

      const newResume = await Resume.create({
         userId,
         title,
      })

      return res.status(201).json({
         message: 'Resume created successfully.',
         resume: newResume,
      })
   } catch (error) {
      res.status(400).json({ message: error.message })
   }
}
