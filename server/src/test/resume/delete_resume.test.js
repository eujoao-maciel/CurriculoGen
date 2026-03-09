import request from "supertest"
import { describe, it, expect } from "vitest"
import { app } from "../../app.js"
import { useMongoMemoryServer } from "../setup/mongoMemoryServer.js"
import { generateToken } from "../helpers/generateToken.js"
import { createResume } from '../helpers/createResume.js'

useMongoMemoryServer()

describe("DELETE /resume/delete/:resumeId", () => {
    it("should return 200 if the resume is successfully deleted", async () => {
        const { token, user } = await generateToken()

        const resume = await createResume('resumeTitle', user._id)

        const res = await request(app)
            .delete(`/resume/delete/${resume._id}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.status).toBe(200)
        expect(res.body.message).toBe("Resume deleted successfully")
    })

    it("should return 404 if resume does not exist", async () => {
        const { token } = await generateToken()

        const fakeResumeId = "507f1f77bcf86cd799439011"

        const res = await request(app)
            .delete(`/resume/delete/${fakeResumeId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.status).toBe(404)
        expect(res.body.message).toBe("Resume not found.")
    })
})
