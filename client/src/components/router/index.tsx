import { Route, Routes, useLocation } from 'react-router-dom'

import Home from '../../pages/home'
import Register from '../../pages/register'

const AppRouter = () => {
  const { pathname } = useLocation()

  return (
    <Routes location={pathname}>
      <Route path="/" element=<Home /> />
      <Route path="/register" element=<Register /> />
    </Routes>
  )
}

export default AppRouter
