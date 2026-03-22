import request from "supertest"
import { describe, expect, it, vi, beforeEach } from "vitest"
import { app } from "../../app.js"
import {
    mockOpenAiSuccess,
    mockOpenAiError,
    openAiSpy,
} from "../helpers/openaiMocks.js"

vi.mock("../../config/ai.js")

describe("POST ai/enhance-job-desc", () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it("should return 200 with enhanced summary content", async () => {
        const fakeContent =
            "Results-driven engineer with +5 years of experience."
        mockOpenAiSuccess(fakeContent)

        const res = await request(app).post("/ai/enhance-job-desc").send({
            userContent: "I am an engineer with 5 years of experience",
        })

        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty("enhancedSummaryContent", fakeContent)
    })

    it("should return 400 when OpenAi throws an error", async () => {
        mockOpenAiError()

        const res = await request(app)
            .post("/ai/enhance-job-desc")
            .send({ userContent: "user content text" })

        expect(res.status).toBe(400)
    })

    it("should send userContent inside the user message to OpenAi", async () => {
        mockOpenAiSuccess()

        const userContent = "Backend developer focused on Node.js"
        const res = await request(app)
            .post("/ai/enhance-job-desc")
            .send({ userContent })

        const callArgs = openAiSpy.mock.calls[0][0]
        expect(callArgs.messages[1]).toEqual({
            role: "user",
            content: userContent,
        })
    })
})
