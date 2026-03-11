import request from 'supertest'
import { describe, it, expect } from 'vitest'
import { app } from '../../app.js'
import { useMongoMemoryServer } from '../setup/mongoMemoryServer.js'
import { generateToken } from '../helpers/generateToken.js'
import { createResume } from '../helpers/createResume.js'

useMongoMemoryServer()

describe('PUT /resume/update', () => {
   it('should return 200 if the resume is updated successfully', async () => {
      const { token, user } = await generateToken()

      const resume = await createResume('old title', user._id)
      const resumeData = {
         personal_info: {
            full_name: 'Test Name',
         },
      }

      const res = await request(app)
         .put('/resume/update')
         .set('Authorization', `Bearer ${token}`)
         .field('resumeId', resume._id.toString())
         .field('resumeData', JSON.stringify(resumeData))

      expect(res.status).toBe(200)
      expect(res.body.message).toBe('Saved successfully.')
   })

   it('should return 404 if resume is not found', async () => {
      const { token } = await generateToken()

      const resumeData = {
         personal_info: {
            full_name: 'Test Name',
         },
      }

      const res = await request(app)
         .put('/resume/update')
         .set('Authorization', `Bearer ${token}`)
         .field('resumeId', '64b7d59c2c1f9f0012345678')
         .field('resumeData', JSON.stringify(resumeData))

      expect(res.body.message).toBe('Resume not found.')
      expect(res.status).toBe(404)
   })

   it('should return 400 for invalid payload', async () => {
      const { token } = await generateToken()

      const res = await request(app)
         .put('/resume/update')
         .set('Authorization', `Bearer ${token}`)
         .field('resumeId', '')
         .field('resumeData', '')

      expect(res.status).toBe(400)
      expect(res.body.message).toBe('validation failed.')
   })
})
