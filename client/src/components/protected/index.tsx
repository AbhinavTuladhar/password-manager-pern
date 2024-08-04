import { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'

const Protected: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default Protected
