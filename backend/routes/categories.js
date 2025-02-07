import express from "express"
import { Category } from "../models/index.js"
import { auth } from "../middleware/auth.js"

const router = express.Router()

// Get all categories
router.get("/", auth, async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

export default router

