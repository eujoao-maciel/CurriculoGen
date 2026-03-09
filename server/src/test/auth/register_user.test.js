import request from "supertest"
import { describe, expect, it } from "vitest"
import { app } from "../../app.js"
import { useMongoMemoryServer } from "../setup/mongoMemoryServer.js"
import { createUser } from '../helpers/createUser.js'

useMongoMemoryServer()

describe("POST /users/register", () => {
    it("registers user successfully", async () => {
        const res = await request(app).post("/users/register").send({
            name: "name",
            email: "name@email.com",
            password: "passwordtest",
        })

        expect(res.status).toBe(201)
        expect(res.body.message).toBe("user registered successfully.")
        expect(typeof res.body.token).toBe("string")
        expect(res.body.user.email).toBe("name@email.com")
        expect(res.body.user.password).toBeUndefined()
    })

    it("returns 409 when user already exists.", async () => {
        const user = await createUser()
         
        const res = await request(app).post("/users/register").send({
            name: "Outro",
            email: "name@email.com",
            password: "abcdef",
        })

        expect(res.status).toBe(409)
        expect(res.body).toEqual({ error: "user already exists." })
    })

    it("returns 400 for invalid payload", async () => {
        const res = await request(app).post("/users/register").send({
            name: "",
            email: "email-invalido",
            password: "123",
        })

        expect(res.status).toBe(400)
        expect(res.body.message).toBe("validation failed.")
        expect(Array.isArray(res.body.errors)).toBe(true)
    })
})
