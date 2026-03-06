import request from "supertest"
import { describe, it, expect } from "vitest"
import { app } from "../../app.js"
import { User } from "../../models/User.js"
import { Resume } from "../../models/Resume.js"
import jwt from "jsonwebtoken"
import { useMongoMemoryServer } from "../setup/mongoMemoryServer.js"

useMongoMemoryServer()

const generateToken = async () => {
    const user = await User.create({
        name: "name",
        email: "name@email.com",
        password: "passwordTest",
    })

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    return { token, user }
}

const createResume = async (userId) => {
    const resume = await Resume.create({
        userId,
        title: "resume title",
    })

    return resume
}

describe("DELETE /resume/delete/:resumeId", () => {
    it("should return 200 if the resume is successfully deleted", async () => {
        const { token, user } = await generateToken()

        const resume = await createResume(user._id)

        const res = await request(app)
            .delete(`/resume/delete/${resume._id}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.status).toBe(200)
        expect(res.body.message).toBe("Resume deleted successfully")
    })

    it("should return 404 if resume does not exist", async () => {
        const { token } = await generateToken()

        const fakeResumeId = '507f1f77bcf86cd799439011'

        const res = await request(app)
            .delete(`/resume/delete/${fakeResumeId}`)
            .set("Authorization", `Bearer ${token}`)

        expect(res.status).toBe(404)
        expect(res.body.message).toBe("Resume not found.")
    })
})
