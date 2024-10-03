import { Link } from "@remix-run/react"

const Home = () => {
  return (
    <>
      <div className="text-end m-4">
        <Link to="/login" className="btn btn-neutral">
          Login
        </Link>
      </div>

      <div className="text-center">
        description
      </div>
    </>
  )
}

export default Home