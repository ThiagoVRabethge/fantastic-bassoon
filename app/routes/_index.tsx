import type { MetaFunction } from "@remix-run/node"
import axios from "axios"
import { useState } from "react"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const [name, setName] = useState<string>()

  const [email, setEmail] = useState<string>()

  const handleSignIn = async (e: any) => {
    e.preventDefault()

    await axios
      .post("https://fluffy-happiness.onrender.com/users", {
        "name": name,
        "email": email
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error))
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <form onSubmit={(e) => handleSignIn(e)}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <button type="submit">
            Sign-In
          </button>
        </div>
      </form>
    </div>
  )
}