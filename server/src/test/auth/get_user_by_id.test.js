import request from "supertest"
import { describe, expect, it } from "vitest"
import jwt from "jsonwebtoken"
import { app } from "../../app.js"
import { User } from "../../models/User.js"
import { useMongoMemoryServer } from "../setup/mongoMemoryServer.js"
import { createUser } from '../helpers/createUser'

useMongoMemoryServer()

describe("GET /users/data", () => {
    it("should return 200 and user data successfully.", async () => {
        const user = await createUser()

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

        const res = await request(app)
            .get("/users/data")
            .set("Authorization", `Bearer ${token}`)

        expect(res.status).toBe(200)
        expect(res.body.user.email).toEqual("name@email.com")
    })

    it("should return 404 if user does not exists", async () => {
        const res = await request(app).get("/users/data")

        expect(res.status).toBe(401)
        expect(res.body.error).toBe("Access denied. No token provider.")
    })
})
