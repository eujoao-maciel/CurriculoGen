import request from 'supertest'
import { describe, expect, it } from 'vitest'
import jwt from 'jsonwebtoken'
import { app } from '../../app.js'
import { User } from '../../models/User.js'
import { Resume } from '../../models/Resume.js'
import { useMongoMemoryServer } from '../setup/mongoMemoryServer.js'

useMongoMemoryServer()

describe('GET /users/resumes', () => {
   it('should return user resumes with status 200', async () => {
      const user = await User.create({
         name: 'name',
         email: 'name@email.com',
         password: 'passwordtest',
      })

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

      await Resume.create({
         title: 'resume_1',
         userId: user._id,
      })

      await Resume.create({
         title: 'resume_2',
         userId: user._id,
      })

      const res = await request(app)
         .get('/users/resumes')
         .set('Authorization', `Bearer ${token}`)

      expect(res.status).toBe(200)
      expect(res.body.resumes).toHaveLength(2)
   })

   it('should return 401 if no token is provided', async () => {
      const res = await request(app).get('/users/resumes')

      expect(res.status).toBe(401)
   })
})
