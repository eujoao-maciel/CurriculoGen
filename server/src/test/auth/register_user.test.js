import request from 'supertest'
import { describe, expect, it } from 'vitest'
import { app } from '../../app.js'
import { User } from '../../models/User.js'
import { useMongoMemoryServer } from '../setup/mongoMemoryServer.js'

useMongoMemoryServer()

describe('POST /users/register', () => {
   it('registers user successfully', async () => {
      const res = await request(app).post('/users/register').send({
         name: 'Jota',
         email: 'jota@email.com',
         password: '123456',
      })

      expect(res.status).toBe(201)
      expect(res.body.message).toBe('user registered successfully.')
      expect(typeof res.body.token).toBe('string')
      expect(res.body.user.email).toBe('jota@email.com')
      expect(res.body.user.password).toBeUndefined()
   })

   it('returns 409 when user already exists.', async () => {
      await User.create({
         name: 'Jota',
         email: 'jota@email.com',
         password: '123456',
      })

      const res = await request(app).post('/users/register').send({
         name: 'Outro',
         email: 'jota@email.com',
         password: 'abcdef',
      })

      expect(res.status).toBe(409)
      expect(res.body).toEqual({ error: 'user already exists.' })
   })

   it('returns 400 for invalid payload', async () => {
      const res = await request(app).post('/users/register').send({
         name: '',
         email: 'email-invalido',
         password: '123',
      })

      expect(res.status).toBe(400)
      expect(res.body.error).toBe('validation failed.')
      expect(Array.isArray(res.body.details)).toBe(true)
   })
})
