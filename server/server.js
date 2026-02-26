import "dotenv/config"
import { connectDB } from "./src/config/db.js"
import { app } from './src/app.js'

const PORT = process.env.PORT || 3333

await connectDB()

app.listen(PORT, () => console.log("api is running"))
