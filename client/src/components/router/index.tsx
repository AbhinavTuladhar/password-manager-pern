import { Route, Routes, useLocation } from 'react-router-dom'

import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'
import WebsiteDetail from '@/pages/website-detail'
import Websites from '@/pages/websites-list'

import Protected from '../protected'

const AppRouter = () => {
  const { pathname } = useLocation()

  return (
    <Routes location={pathname}>
      <Route path="/" element=<Home /> />
      <Route path="/register" element=<Register /> />
      <Route path="/login" element=<Login /> />
      <Route
        path="/website"
        element={
          <Protected>
            <Websites />
          </Protected>
        }
      />
      <Route
        path="/website/:id"
        element={
          <Protected>
            <WebsiteDetail />
          </Protected>
        }
      />
    </Routes>
  )
}

export default AppRouter
