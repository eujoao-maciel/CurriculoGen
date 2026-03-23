import request from 'supertest'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { app } from '../../app.js'
import { generateToken } from '../helpers/generateToken.js'
import { useMongoMemoryServer } from '../setup/mongoMemoryServer.js'
import {
   mockOpenAiSuccess,
   mockOpenAiError,
   openAiSpy,
} from '../helpers/openaiMocks.js'

useMongoMemoryServer()
vi.mock('../../config/ai.js')

describe('POST ai/enhance-job-desc', () => {
   beforeEach(() => {
      vi.clearAllMocks()
   })

   it('should return 200 with enhanced job desc content', async () => {
      const { token } = await generateToken()

      const fakeContent = 'This is the improved job description.'
      mockOpenAiSuccess(fakeContent)

      const res = await request(app)
         .post('/ai/enhance-job-desc')
         .set('Authorization', `Bearer ${token}`)
         .send({
            userContent: 'This is the normal job description',
         })

      expect(res.status).toBe(200)
      expect(res.body).toHaveProperty('enhancedJobDescription', fakeContent)
   })

   it('should return 400 when OpenAi throws an error', async () => {
      const { token } = await generateToken()

      mockOpenAiError()

      const res = await request(app)
         .post('/ai/enhance-job-desc')
         .set('Authorization', `Bearer ${token}`)
         .send({ userContent: 'user content text' })

      expect(res.status).toBe(400)
   })

   it('should send userContent inside the user message to OpenAi', async () => {
      const { token } = await generateToken()

      mockOpenAiSuccess()

      const userContent = 'Job description.'
      const res = await request(app)
         .post('/ai/enhance-job-desc')
         .set('Authorization', `Bearer ${token}`)
         .send({ userContent })

      const callArgs = openAiSpy.mock.calls[0][0]
      expect(callArgs.messages[1]).toEqual({
         role: 'user',
         content: userContent,
      })

      expect(res.status).toBe(200)
   })
})
