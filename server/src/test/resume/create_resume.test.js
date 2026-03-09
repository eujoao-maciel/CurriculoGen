import request from "supertest"
import { describe, it, expect } from "vitest"
import { app } from "../../app.js"
import { Resume } from "../../models/Resume.js"
import { useMongoMemoryServer } from "../setup/mongoMemoryServer.js"
import { generateToken } from "../helpers/generateToken.js"

useMongoMemoryServer()

describe("POST /resume/create", () => {
    it("should return 201 if the resume is created successfully", async () => {
        const { token } = await generateToken()
        const title = "Resume Title"

        const res = await request(app)
            .post("/resume/create")
            .set("Authorization", `Bearer ${token}`)
            .send({ title })

        expect(res.status).toBe(201)
        expect(res.body.message).toBe("Resume created successfully.")
    })

    it("return 400 for invalid payload", async () => {
        const { token } = await generateToken()

        const res = await request(app)
            .post("/resume/create")
            .set("Authorization", `Bearer ${token}`)
            .send({ title: "" })

        expect(res.body.message).toBe("validation failed.")
        expect(res.status).toBe(400)
    })
})
