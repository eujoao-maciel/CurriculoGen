import request from 'supertest'
import { describe, expect, it } from 'vitest'
import jwt from 'jsonwebtoken'
import { app } from '../../app.js'
import { User } from '../../models/User.js'
import { useMongoMemoryServer } from '../setup/mongoMemoryServer.js'

useMongoMemoryServer()

describe('GET /users/data', () => {
   it('should return user successfully.', async () => {
      const user = await User.create({
         name: 'name',
         email: 'name@email.com',
         password: 'passwordtest',
      })

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

      const res = await request(app)
         .get('/users/data')
         .set('Authorization', `Bearer ${token}`)

      expect(res.status).toBe(200)
      expect(res.body.user.email).toEqual('name@email.com')
   })
})
