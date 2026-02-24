import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/status', (req, res) => {
  res.json({ status: "API is running" })
})

const PORT = process.env.PORT || 3333
app.listen(PORT, () => console.log("api is running"))
