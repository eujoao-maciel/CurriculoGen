import { Resume } from '../models/Resume.js'
import { imageKit } from '../config/imageKit.js'
import fs from 'fs'

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

export const updateResume = async (req, res) => {
   try {
      const userId = req.userId
      const { resumeId, resumeData, removeBackground } = req.validatedInputs
      const image = req.file

      let resumeDataCopy = JSON.parse(JSON.stringify(resumeData))

      if (image) {
         const imageBufferData = fs.createReadStream(image.path)

         const response = await imageKit.files.upload({
            file: imageBufferData,
            fileName: 'resume.png',
            folder: 'user-resumes',
            transformation: {
               pre:
                  'w-300, h-300, fo-face, z-0.75' +
                  (removeBackground ? ',e-bgremove' : ''),
            },
         })

         resumeDataCopy.personal_info.image = response.url
         fs.unlinkSync(image.path)
      }

      const resume = await Resume.findOneAndUpdate(
         { userId, _id: resumeId },
         resumeDataCopy,
         { new: true }
      )

      if (!resume) {
         return res.status(404).json({ message: 'Resume not found.' })
      }

      return res.status(200).json({ message: 'Saved successfully.', resume })
   } catch (error) {
      return res.status(400).json({ message: error.message })
   }
}
