"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"

export default function NoteForm({ note, onSubmit }) {
  const { register, handleSubmit, setValue } = useForm()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (note) {
      setValue("title", note.title)
      setValue("content", note.content)
      setCategories(note.Categories.map((cat) => cat.name))
    }
  }, [note, setValue])

  const handleCategoryChange = (e) => {
    const value = e.target.value
    if (e.target.checked) {
      setCategories([...categories, value])
    } else {
      setCategories(categories.filter((cat) => cat !== value))
    }
  }

  const submitHandler = (data) => {
    onSubmit({ ...data, categories })
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" {...register("title", { required: true })} />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea id="content" {...register("content", { required: true })}></textarea>
      </div>
      <div>
        <label>Categories</label>
        <div>
  <input
    type="checkbox"
    id="work"
    value="work"
    checked={categories.includes("work")}
    onChange={handleCategoryChange}
  />
  <label htmlFor="work">Work</label>
</div>

<div>
  <input
    type="checkbox"
    id="personal"
    value="personal"
    checked={categories.includes("personal")}
    onChange={handleCategoryChange}
  />
  <label htmlFor="personal">Personal</label>
</div>

<div>
  <input
    type="checkbox"
    id="health"
    value="health"
    checked={categories.includes("health")}
    onChange={handleCategoryChange}
  />
  <label htmlFor="health">Health</label>
</div>

<div>
  <input
    type="checkbox"
    id="finance"
    value="finance"
    checked={categories.includes("finance")}
    onChange={handleCategoryChange}
  />
  <label htmlFor="finance">Finance</label>
</div>

<div>
  <input
    type="checkbox"
    id="education"
    value="education"
    checked={categories.includes("education")}
    onChange={handleCategoryChange}
  />
  <label htmlFor="education">Education</label>
</div>

<div>
  <input
    type="checkbox"
    id="entertainment"
    value="entertainment"
    checked={categories.includes("entertainment")}
    onChange={handleCategoryChange}
  />
  <label htmlFor="entertainment">Entertainment</label>
</div>

<div>
  <input
    type="checkbox"
    id="travel"
    value="travel"
    checked={categories.includes("travel")}
    onChange={handleCategoryChange}
  />
  <label htmlFor="travel">Travel</label>
</div>

<div>
  <input
    type="checkbox"
    id="technology"
    value="technology"
    checked={categories.includes("technology")}
    onChange={handleCategoryChange}
  />
  <label htmlFor="technology">Technology</label>
</div>
        
        {/* Add more categories as needed */}
      </div>
      <button type="submit">{note ? "Update Note" : "Create Note"}</button>
    </form>
  )
}

