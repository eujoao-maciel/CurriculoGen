import "../helpers/pdfParseMocks.js"
import request from "supertest"
import { describe, expect, it, vi, beforeEach } from "vitest"
import { app } from "../../app.js"
import { Resume } from "../../models/Resume.js"
import { generateToken } from "../helpers/generateToken.js"
import { useMongoMemoryServer } from "../setup/mongoMemoryServer.js"
import {
    mockOpenAiSuccess,
    mockOpenAiError,
    openAiSpy,
} from "../helpers/openaiMocks.js"

useMongoMemoryServer()
vi.mock("../../config/ai.js")

describe("POST /ai/upload-resume", () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("should return 200 with resumeId when resume upload succeeds", async () => {
        const { token } = await generateToken()

        const extractedResume = {
            professional_summary: "Frontend developer with React experience.",
            skills: ["React", "JavaScript"],
            personal_info: {
                image: "",
                full_name: "John Doe",
                profession: "Frontend Developer",
                email: "john@email.com",
                phone: "11999999999",
                location: "Canada",
                linkedin: "linkedin.com/in/john",
                website: "john.dev",
            },
            experience: [
                {
                    company: "Tech Corp",
                    position: "Frontend Developer",
                    start_date: "2023-01",
                    end_date: "2024-01",
                    description: "Built interfaces with React.",
                    is_current: false,
                },
            ],
            project: [
                {
                    name: "Resume Builder",
                    type: "Web App",
                    description: "App for creating resumes.",
                },
            ],
            education: [
                {
                    institution: "University X",
                    degree: "Bachelor",
                    field: "Computer Science",
                    graduation_date: "2026",
                    gpa: "3.8",
                },
            ],
        }

        mockOpenAiSuccess(JSON.stringify(extractedResume))

        const res = await request(app)
            .post("/ai/upload-resume")
            .set("Authorization", `Bearer ${token}`)
            .field("title", "My Resume")
            .attach("resume", Buffer.from("fake pdf content"), "resume.pdf")

        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty("resumeId")
    })

    it("should return 401 when user is not authenticated", async () => {
        const res = await request(app).post("/ai/upload-resume").send({
            title: "My Resume",
            resumeText: "Resume content here",
        })

        expect(res.status).toBe(401)
    })

    it("should return 400 when OpenAI throws an error", async () => {
        const { token } = await generateToken()

        mockOpenAiError()

        const res = await request(app)
            .post("/ai/upload-resume")
            .set("Authorization", `Bearer ${token}`)
            .send({
                title: "My Resume",
                resumeText: "Resume content here",
            })

        expect(res.status).toBe(400)
    })
})
