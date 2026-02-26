import express from 'express'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerDocs from '../swagger.json' with { type: 'json' }
import { authRoutes } from './routes/auth.js'

export const app = express()

app.use(cors())
app.use(express.json())
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.get('/status', (req, res) => {
  res.json({ message: 'api is running' })
})

app.use('/users/', authRoutes)

