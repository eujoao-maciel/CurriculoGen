import { Resume } from "../models/Resume.js"
import { openai } from "../config/ai.js"
import { PDFParse } from "pdf-parse"

export const enhanceProfessionalSummary = async (req, res) => {
    try {
        const { userContent } = req.validatedInputs

        const response = await openai.chat.completions.create({
            model: process.env.GEMINI_MODEL_NAME,
            messages: [
                {
                    role: "system",
                    content: `you are an expert in resume writing. Your task is 
              to enhance the professional summary of a resume. The summary 
              should be 1-2 sentences also highlighting key skills, experience,
              and career objective. Make it compelling and ATS-friendly. and only
              return text no options or anything else.`,
                },
                {
                    role: "user",
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

export const enhanceJobDescription = async (req, res) => {
    try {
        const { userContent } = req.validatedInputs

        const response = await openai.chat.completions.create({
            model: process.env.GEMINI_MODEL_NAME,
            messages: [
                {
                    role: "system",
                    content: `You are an expert in resume writing. Your task is to 
                    enhance the job description of a resume. The job description 
                    should be only in 1-2 sentence also highlighting key responsibilities
                    and achievements. Use action verbs an quantifiable results where possible.
                    Make it ATS-friendly and only return text no options or anything else.
                    `,
                },
                {
                    role: "user",
                    content: userContent,
                },
            ],
        })

        const enhancedJobDescription = response.choices[0].message.content

        return res.status(200).json({ enhancedJobDescription })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            errors: error.details,
        })
    }
}

export const uploadResume = async (req, res) => {
    try {
        const userId = req.userId

        const { title } = req.validatedInputs
        const fileBuffer = req.file.buffer

        const parserFileBuffer = new PDFParse({ data: fileBuffer })
        const resultParser = await parserFileBuffer.getText()
        const resumeText = resultParser.text
        await parserFileBuffer.destroy()

        const userPrompt = `extract data from this resume. ${resumeText}
 
      Provide data in the following JSON format with no additional text 
      before or after:
  
      {
        professional_summary: { type: String, default: "" },
        skills: [{ type: String }],
        personal_info: {
            image: { type: String, default: "" },
            full_name: { type: String, default: "" },
            profession: { type: String, default: "" },
            email: { type: String, default: "" },
            phone: { type: String, default: "" },
            location: { type: String, default: "" },
            linkedin: { type: String, default: "" },
            website: { type: String, default: "" },
        },
        experience: [
            {
                company: { type: String },
                position: { type: String },
                start_date: { type: String },
                end_date: { type: String },
                description: { type: String },
                is_current: { type: Boolean },
            },
        ],
        project: [
            {
                name: { type: String },
                type: { type: String },
                description: { type: String },
            },
        ],
        education: [
            {
                institution: { type: String },
                degree: { type: String },
                field: { type: String },
                graduation_date: { type: String },
                gpa: { type: String },
            },
        ],
      }       
      
      `

        const response = await openai.chat.completions.create({
            model: process.env.GEMINI_MODEL_NAME,
            messages: [
                {
                    role: "system",
                    content: `You are an expert AI Agent to extract data from resume.`,
                },
                {
                    role: "user",
                    content: userPrompt,
                },
            ],
            response_format: { type: "json_object" },
        })

        const extractedData = response.choices[0].message.content
        const parsedData = JSON.parse(extractedData)
        const newResume = await Resume.create({ userId, title, ...parsedData })

        res.status(200).json({ resumeId: newResume._id })
    } catch (error) {
        return res.status(400).json({
            message: error.message,
            errors: error.details,
        })
    }
}
