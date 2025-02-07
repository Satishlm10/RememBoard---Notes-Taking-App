"use client"

import { useContext, useState } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { AuthContext } from "../contexts/AuthContext"
import Layout from "../components/Layout"

export default function Register() {
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")
  const { register: registerUser } = useContext(AuthContext)
  const router = useRouter()

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    const success = await registerUser(data.username, data.email, data.password)
    if (success) {
      router.push("/notes")
    } else {
      setError("Registration failed")
    }
  }

  return (
    <Layout>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username", { required: true })} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email", { required: true })} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password", { required: true })} />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" {...register("confirmPassword", { required: true })} />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
      </form>
    </Layout>
  )
}

