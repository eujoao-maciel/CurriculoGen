import request from "supertest"
import { describe, it, expect } from "vitest"
import { app } from "../../app.js"
import { useMongoMemoryServer } from "../setup/mongoMemoryServer.js"
import { createResume } from '../helpers/createResume.js'
import { generateToken } from '../helpers/generateToken.js'


useMongoMemoryServer()

describe('GET /resume/public/:resumeId', () => {
  it('should return 200 if the resume is successfully updated', async () => {
    const { user } = await generateToken()
    const resume = await createResume('Resume Title', user._id)

    const res = await request(app)
      .get(`/resume/public/${resume._id}`)

    expect(res.status).toBe(200)
  })

  it("should return 404 if resume does not exist", async () => {
        const fakeResumeId = "507f1f77bcf86cd799439011"

        const res = await request(app)
            .get(`/resume/public/${fakeResumeId}`)

        expect(res.status).toBe(404)
        expect(res.body.message).toBe("Resume not found.")
    })

})
