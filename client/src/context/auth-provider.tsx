import { createContext, FC, PropsWithChildren, useState } from 'react'

type AuthContextProps = {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
})

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticatedValue] = useState(false)

  const setIsAuthenticated = (value: boolean) => {
    setIsAuthenticatedValue(value)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
