import request from 'supertest'
import { describe, it, expect } from 'vitest'
import { app } from '../../app.js'
import jwt from 'jsonwebtoken'
import { User } from '../../models/User.js'
import { Resume } from '../../models/Resume.js'
import { useMongoMemoryServer } from '../setup/mongoMemoryServer.js'

useMongoMemoryServer()

const generateToken = async () => {
   const user = await User.create({
      name: 'name',
      email: 'name@email.com',
      password: 'passwordtest',
   })

   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
   return token
}

describe('POST /resume/create', () => {
   it('should return 201 if the resume is created successfully', async () => {
      const token = await generateToken()
      const title = 'Resume Title'

      const res = await request(app)
         .post('/resume/create')
         .set('Authorization', `Bearer ${token}`)
         .send({ title })

      expect(res.status).toBe(201)
      expect(res.body.message).toBe('Resume created successfully.')
   })

   it('return 400 for invalid payload', async () => {
      const token = await generateToken()

      const res = await request(app)
         .post('/resume/create')
         .set('Authorization', `Bearer ${token}`)
         .send({ title: '' })

      expect(res.body.message).toBe('validation failed.')
      expect(res.status).toBe(400)
   })
})
