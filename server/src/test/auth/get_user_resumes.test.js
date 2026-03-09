import request from "supertest"
import { describe, expect, it } from "vitest"
import jwt from "jsonwebtoken"
import { app } from "../../app.js"
import { Resume } from "../../models/Resume.js"
import { useMongoMemoryServer } from "../setup/mongoMemoryServer.js"
import { createUser } from "../helpers/createUser.js"
import { createResume } from '../helpers/createResume.js'

useMongoMemoryServer()

describe("GET /users/resumes", () => {
    it("should return user resumes with status 200", async () => {
        const user = await createUser()

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

        const resume1 = await createResume("Resume Title", user._id)
        const resume2 = await createResume("Resume Title", user._id)

        const res = await request(app)
            .get("/users/resumes")
            .set("Authorization", `Bearer ${token}`)

        expect(res.status).toBe(200)
        expect(res.body.resumes).toHaveLength(2)
    })

    it("should return 401 if no token is provided", async () => {
        const res = await request(app).get("/users/resumes")

        expect(res.status).toBe(401)
    })
})
