import { useNavigate } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'
import AuthService from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'

import Button from '../button'

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
    <Button variant="transparent" onClick={() => mutate()}>
      Logout
    </Button>
  )
}

export default LogoutButton
