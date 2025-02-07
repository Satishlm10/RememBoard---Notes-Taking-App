import express from "express"
import cors from 'cors';
import dotenv from "dotenv"
import { sequelize } from "./config/database.js"
import authRoutes from "./routes/auth.js"
import noteRoutes from "./routes/notes.js"
import categoryRoutes from "./routes/categories.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/notes", noteRoutes)
app.use("/api/categories", categoryRoutes)

const PORT = process.env.PORT || 5000

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})

