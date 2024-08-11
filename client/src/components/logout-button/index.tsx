import { useNavigate } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'
import AuthService from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'

const LogoutButton = () => {
  const { setIsAuthenticated } = useAuth()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: AuthService.logout,
    onSuccess: () => {
      setIsAuthenticated(false)
      navigate('/login')
    },
  })

  return (
    <button className="rounded-lg border px-4 py-3" onClick={() => mutate()}>
      Logout
    </button>
  )
}

export default LogoutButton
