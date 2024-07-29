import { Link } from 'react-router-dom'

import Button from '../button'

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between bg-gradient-to-r from-blue-800 via-indigo-600 to-blue-700 p-4">
      <Link to="/">
        <h1 className="text-2xl font-bold">PassManager</h1>
      </Link>
      <nav className="flex gap-x-4">
        <Link to="/register">
          <Button variant="coloured"> Register</Button>
        </Link>
        <Link to="/login">
          <Button variant="transparent"> Log in </Button>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
