"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Layout from "../../components/Layout"
import NoteForm from "../../components/NoteForm"

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)
  const [filter, setFilter] = useState("")
  const router = useRouter()

  useEffect(() => {
    fetchNotes()
  }, [])

  const fetchNotes = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notes`)
      setNotes(res.data)
    } catch (error) {
      console.error("Error fetching notes:", error)
    }
  }

  const handleCreateNote = async (data) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/notes`, data)
      fetchNotes()
      setSelectedNote(null)
    } catch (error) {
      console.error("Error creating note:", error)
    }
  }

  const handleUpdateNote = async (data) => {
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/notes/${selectedNote.id}`, data)
      fetchNotes()
      setSelectedNote(null)
    } catch (error) {
      console.error("Error updating note:", error)
    }
  }

  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/notes/${id}`)
      fetchNotes()
      setSelectedNote(null)
    } catch (error) {
      console.error("Error deleting note:", error)
    }
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(filter.toLowerCase()) ||
      note.content.toLowerCase().includes(filter.toLowerCase()) ||
      note.Categories.some((cat) => cat.name.toLowerCase().includes(filter.toLowerCase())),
  )

  return (
    <Layout>
      <h1>Notes</h1>
      <div>
        <input type="text" placeholder="Search notes..." value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <div className="notes-container">
        <div className="notes-list">
          {filteredNotes.map((note) => (
            <div key={note.id} className="note-item">
              <h3>{note.title}</h3>
              <p>{note.content.substring(0, 50)}...</p>
              <div>
                {note.Categories.map((cat) => (
                  <span key={cat.id} className="category-tag" >
                    {cat.name}
                  </span>
                ))}
              </div>
              <button onClick={() => setSelectedNote(note)} style={{ marginTop: '10px' }}>
  Edit
</button>
<button onClick={() => handleDeleteNote(note.id)} style={{ marginTop: '10px' , marginLeft: '10px'}}>
  Delete
</button>

            </div>
          ))}
        </div>
        <div className="note-form">
          <h2>{selectedNote ? "Edit Note" : "Create Note"}</h2>
          <NoteForm note={selectedNote} onSubmit={selectedNote ? handleUpdateNote : handleCreateNote} />
        </div>
      </div>
    </Layout>
  )
}

