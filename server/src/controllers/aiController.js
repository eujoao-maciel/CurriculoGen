import { openai } from '../config/ai.js'

export const enhanceProfessionalSummary = async (req, res) => {
   try {
      const { userContent } = req.validatedInputs

      const response = await openai.chat.completions.create({
         model: process.env.GEMINI_MODEL_NAME,
         messages: [
            {
               role: 'system',
               content: `you are an expert in resume writing. Your task is 
              to enhance the professional summary of a resume. The summary 
              should be 1-2 sentences also highlighting key skills, experience,
              and career objective. Make it compelling and ATS-friendly. and only
              return text no options or anything else.`,
            },
            {
               role: 'user',
               content: userContent,
            },
         ],
      })

      const enhancedSummaryContent = response.choices[0].message.content

      return res.status(200).json({ enhancedSummaryContent })
   } catch (error) {
      return res.status(400).json({
         message: error.message,
         errors: error.details,
      })
   }
}
