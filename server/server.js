import express from 'express'
import cors from 'cors'
import "dotenv/config"
import { connectDB } from "./src/config/db.js"

const app = express()
const PORT = process.env.PORT || 3333

await connectDB()

app.use(cors())
app.use(express.json())

app.get('/status', (req, res) => {
  res.json({ status: "API is running" })
})

app.listen(PORT, () => console.log("api is running"))
