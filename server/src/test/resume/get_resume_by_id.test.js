import request from "supertest"
import { expect, it, describe } from "vitest"
import { app } from "../../app.js"
import { useMongoMemoryServer } from "../setup/mongoMemoryServer.js"
import { generateToken } from "../helpers/generateToken.js"
import { createResume } from "../helpers/createResume.js"

useMongoMemoryServer()

describe("GET /resume/resumes/:resumeId", () => {
    it("should return 200 if return the resume", async () => {
        const { token, user } = await generateToken()
        const resume = await createResume("resumeTitle", user._id)

        const res = await request(app)
            .get(`/resume/resumes/${resume._id}`)
            .set("Authorization", `Bearer ${token}`)

       expect(res.status).toBe(200)
    })

    it('should return 404 if resume does not found', async () => {
        const { token, user } = await generateToken()
    }) 
})
