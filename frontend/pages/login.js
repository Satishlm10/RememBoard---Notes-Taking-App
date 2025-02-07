"use client"

import { useContext, useState } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { AuthContext } from "../contexts/AuthContext"
import Layout from "../components/Layout"

export default function Login() {
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState("")
  const { login } = useContext(AuthContext)
  const router = useRouter()

  const onSubmit = async (data) => {
    const success = await login(data.email, data.password)
    if (success) {
      router.push("/notes")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email", { required: true })} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password", { required: true })} />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </Layout>
  )
}

