import { Route, RouteProps, Routes, useLocation } from 'react-router-dom'

import AccountList from '@/pages/account'
import Home from '@/pages/home'
import Login from '@/pages/login'
import Register from '@/pages/register'

import Protected from '../protected'

const AppRouter = () => {
  const location = useLocation()

  const routes: Array<RouteProps & { key: string }> = [
    {
      path: '/',
      element: <Home />,
      key: 'something',
    },
    {
      path: '/register',
      element: <Register />,
      key: 'register',
    },
    {
      path: '/login',
      element: <Login />,
      key: 'login',
    },
    {
      path: '/accounts',
      element: (
        <Protected>
          <AccountList />
        </Protected>
      ),
      key: 'account',
    },
  ]

  return (
    <Routes location={location} key={location.pathname}>
      {routes.map(route => (
        <Route key={route.key} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default AppRouter
