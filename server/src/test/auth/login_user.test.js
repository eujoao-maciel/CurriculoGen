import request from 'supertest'
import { describe, expect, it } from 'vitest'
import { app } from '../../app.js'
import { User } from '../../models/User.js'
import { hashPassword } from '../../utils/password.js'
import { useMongoMemoryServer } from '../setup/mongoMemoryServer.js'

useMongoMemoryServer()

describe('POST /users/login', () => {
   it('login user successfully', async () => {
      const hashed = await hashPassword('123456')
      await User.create({
         name: 'myname',
         email: 'm@email.com',
         password: hashed,
      })

      const res = await request(app).post('/users/login').send({
         email: 'm@email.com',
         password: '123456',
      })

      expect(res.status).toBe(200)
      expect(res.body.message).toBe('Login successful.')
      expect(typeof res.body.token).toBe('string')
      expect(res.body.user.email).toBe('m@email.com')
      expect(res.body.user.password).toBeUndefined()
   })

   it('returns 400 if user does not exists', async () => {
      const res = await request(app).post('/users/login').send({
         email: 'm@email.com',
         password: '123456',
      })

      expect(res.status).toBe(400)
      expect(res.body.message).toBe('Invalid email or password.')
   })

   it('returns 400 for invalid payload', async () => {
      const res = await request(app).post('/users/login').send({
         email: 'invalid-email',
         password: '12',
      })

      expect(res.status).toBe(400)
      expect(res.body.error).toBe("validation failed.")
      expect(Array.isArray(res.body.details)).toBe(true)
   })
})
