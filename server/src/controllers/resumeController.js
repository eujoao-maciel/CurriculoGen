import { Resume } from '../models/Resume.js'

export const createResume = async (req, res) => {
   try {
      const userId = req.userId
      const { title } = req.validatedInputs

      const newResume = await Resume.create({
         userId,
         title,
      })

      return res.status(201).json({
         message: 'Resume created successfully.',
         resume: newResume,
      })
   } catch (error) {
      return res.status(400).json({
         message: error.message,
         errors: error.details,
      })
   }
}

export const deleteResume = async (req, res) => {
   try {
      const userId = req.userId
      const { resumeId } = req.validatedInputs

      const deletedResume = await Resume.findOneAndDelete({
         userId,
         _id: resumeId,
      })

      if (!deletedResume) {
         return res.status(404).json({ message: 'Resume not found.' })
      }

      return res.status(200).json({
         message: 'Resume deleted successfully',
      })
   } catch (error) {
      return res.status(400).json({
         message: error.message,
         errors: error.details,
      })
   }
}

export const getResumeById = async (req, res) => {
   try {
      const userId = req.userId
      const { resumeId } = req.validatedInputs

      const resume = await Resume.findOne({ userId, _id: resumeId }).select(
         '-__v -createdAt -updatedAt'
      )

      if (!resume) {
         return res.status(404).json({ message: 'Resume not found.' })
      }

      return res.status(200).json({
         resume,
      })
   } catch (error) {
      return res.status(400).json({
         message: error.message,
         errors: error.details,
      })
   }
}

export const getPublicResumeById = async (req, res) => {
   try {
      const { resumeId } = req.validatedInputs
      const resume = await Resume.findOne({
         public: true,
         _id: resumeId,
      }).select('-__v -createdAt -updatedAt')

      if (!resume) {
         return res.status(404).json({ message: 'Resume not found.' })
      }
      return res.status(200).json({
         resume,
      })
   } catch (error) {
      return res.status(400).json({
         message: error.message,
         errors: error.details,
      })
   }
}

