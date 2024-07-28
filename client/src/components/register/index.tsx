import { useState } from 'react'

import AuthService from '../../services/auth.service'

const Register = () => {
  const [success, setSuccess] = useState(false)

  const registerUser = async () => {
    const response = await AuthService.register({ password: 'test-password' })
    if (response?.status === 201) {
      setSuccess(true)
    } else {
      setSuccess(false)
    }
  }

  return (
    <div className="flex flex-col items-start gap-y-2">
      <div className="flex gap-x-1">
        <span> Status: </span>
        <span> {success ? 'Created' : 'Not created'}</span>
      </div>
      <button
        onClick={registerUser}
        className="rounded-lg border border-gray-400 bg-orange-400 px-3 py-2 duration-500 hover:bg-orange-500"
      >
        Register user
      </button>
    </div>
  )
}

export default Register
