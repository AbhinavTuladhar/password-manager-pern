import { Link } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'

import Button from '../button'
import LogoutButton from '../logout-button'

const Navbar = () => {
  const { isAuthenticated } = useAuth()

  return (
    <header className="relative flex w-full items-center justify-between bg-surface-mixed-200 p-4 shadow-md shadow-gray-900">
      <Link to="/">
        <h1 className="text-2xl font-bold">PassManager</h1>
      </Link>
      <nav className="flex items-center gap-x-4">
        <Link to="/accounts">Accounts</Link>
        <Link to="/register">
          <Button variant="coloured"> Register</Button>
        </Link>
        {!isAuthenticated ? (
          <Link to="/login">
            <Button variant="transparent"> Log in </Button>
          </Link>
        ) : (
          <LogoutButton />
        )}
      </nav>
    </header>
  )
}

export default Navbar
