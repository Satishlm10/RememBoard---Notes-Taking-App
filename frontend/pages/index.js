"use client"

import Layout from "../components/Layout"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function Home() {
  const { user } = useContext(AuthContext)

  return (
    <Layout>
      <h1>Welcome to RememBoard - Note Taking App</h1>
      {user ? (
        <p>Hello, {user.username}! Start managing your notes.</p>
      ) : (
        <p>Please login or register to start taking notes.</p>
      )}
    </Layout>
  )
}

