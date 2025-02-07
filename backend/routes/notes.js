import express from "express"
import { Note, Category } from "../models/index.js"
import { auth } from "../middleware/auth.js"

const router = express.Router()

// Get all notes for a user
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.findAll({
      where: { UserId: req.user.id },
      include: Category,
    })
    res.json(notes)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

// Get a single note
router.get("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findOne({
      where: { id: req.params.id, UserId: req.user.id },
      include: Category,
    })

    if (!note) {
      return res.status(404).json({ msg: "Note not found" })
    }

    res.json(note)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

// Create a new note
router.post("/", auth, async (req, res) => {
  try {
    const { title, content, categories } = req.body
    const note = await Note.create({
      title,
      content,
      UserId: req.user.id,
    })

    if (categories && categories.length > 0) {
      const categoryInstances = await Promise.all(
        categories.map((cat) => Category.findOrCreate({ where: { name: cat } })),
      )
      await note.setCategories(categoryInstances.map((cat) => cat[0]))
    }

    const noteWithCategories = await Note.findByPk(note.id, {
      include: Category,
    })

    res.json(noteWithCategories)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

// Update a note
router.put("/:id", auth, async (req, res) => {
  try {
    const { title, content, categories } = req.body
    let note = await Note.findOne({
      where: { id: req.params.id, UserId: req.user.id },
    })

    if (!note) {
      return res.status(404).json({ msg: "Note not found" })
    }

    note.title = title
    note.content = content
    await note.save()

    if (categories) {
      const categoryInstances = await Promise.all(
        categories.map((cat) => Category.findOrCreate({ where: { name: cat } })),
      )
      await note.setCategories(categoryInstances.map((cat) => cat[0]))
    }

    note = await Note.findByPk(note.id, { include: Category })

    res.json(note)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

// Delete a note
router.delete("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findOne({
      where: { id: req.params.id, UserId: req.user.id },
    })

    if (!note) {
      return res.status(404).json({ msg: "Note not found" })
    }

    await note.destroy()
    res.json({ msg: "Note removed" })
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server error")
  }
})

export default router

