import { Link } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'

import Button from '../button'

const Navbar = () => {
  const { isAuthenticated } = useAuth()

  return (
    <header className="flex w-full items-center justify-between bg-gradient-to-r from-blue-800 via-indigo-600 to-blue-700 p-4">
      <Link to="/">
        <h1 className="text-2xl font-bold">PassManager</h1>
      </Link>
      <nav className="flex items-center gap-x-4">
        <Link to="/websites">Websites</Link>
        <Link to="/register">
          <Button variant="coloured"> Register</Button>
        </Link>
        {!isAuthenticated ? (
          <Link to="/login">
            <Button variant="transparent"> Log in </Button>
          </Link>
        ) : (
          <span> Logout</span>
        )}
      </nav>
    </header>
  )
}

export default Navbar
