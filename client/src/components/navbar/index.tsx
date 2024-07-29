import { Link } from 'react-router-dom'

import Button from '../button'

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between bg-blue-600 px-4 py-5">
      <h1 className="text-2xl font-bold">PassManager</h1>
      <nav className="flex gap-x-4">
        <Link to="/register">
          <Button variant="coloured"> Register</Button>
        </Link>
        <Link to="/">
          <Button variant="transparent"> Log in </Button>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
