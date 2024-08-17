import { createContext, FC, PropsWithChildren, useState } from 'react'

type AuthContextProps = {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  userId: string
  setUserId: (value: string) => void
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  userId: '',
  setUserId: () => {},
})

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticatedValue] = useState(false)
  const [userId, setUserId] = useState('')

  const setIsAuthenticated = (value: boolean) => {
    setIsAuthenticatedValue(value)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  )
}
