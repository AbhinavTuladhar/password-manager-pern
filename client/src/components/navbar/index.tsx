import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="w-full bg-blue-500 px-4 py-5">
      <nav className="flex gap-x-4">
        <Link to="/"> Home </Link>
        <Link to="/register"> Register </Link>
      </nav>
    </header>
  )
}

export default Navbar
