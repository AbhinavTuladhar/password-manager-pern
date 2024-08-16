import { Route, Routes, useLocation } from 'react-router-dom'

import AccountList from '@/pages/account'
import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'

import Protected from '../protected'

const AppRouter = () => {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element=<Home /> />
      <Route path="/register" element=<Register /> />
      <Route path="/login" element=<Login /> />
      <Route
        path="/accounts"
        element={
          <Protected>
            <AccountList />
          </Protected>
        }
      />
    </Routes>
  )
}

export default AppRouter
