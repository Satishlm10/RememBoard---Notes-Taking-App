"use client"

import Head from "next/head"
import Link from "next/link"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export default function Layout({ children }) {
  const { user, logout } = useContext(AuthContext)

  return (
    <div className="container">
      <Head>
        <title>Note Taking App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/notes">
                  <a>Notes</a>
                </Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/register">
                  <a>Register</a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <main>{children}</main>

      <footer>
        <p>&copy; 2024 Note Taking App - Satish Maharjan</p>
      </footer>
    </div>
  )
}

