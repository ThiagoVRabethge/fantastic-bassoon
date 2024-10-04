import type { MetaFunction } from "@remix-run/node"
import axios from "axios"
import { useEffect, useState } from "react"

export const meta: MetaFunction = () => {
  return [
    { title: "Habit Tracker" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  const [name, setName] = useState<string>()

  const [email, setEmail] = useState<string>()

  useEffect(() => {
    axios
      .get("https://congenial-garbanzo-ochre.vercel.app/users/1")
      .then(() => console.log("server active"))
      .catch((error) => console.error(error))
  }, [])

  const handleSignIn = async (e: any) => {
    e.preventDefault()

    await axios
      .post("https://congenial-garbanzo-ochre.vercel.app/users", {
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