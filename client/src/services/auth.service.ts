import axios from 'axios'

import { BasicResponse } from '../types/response'

class AuthService {
  static async register(password: string) {
    const registerUrl = import.meta.env.VITE_BACKEND_URL + '/master-user/register'

    // use the register route
    try {
      const response = await axios.post<BasicResponse>(
        registerUrl,
        { password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          validateStatus: status => (status >= 200 && status < 300) || status >= 400,
        },
      )
      return response
    } catch (error) {
      console.error(error)
    }
  }
}

export default AuthService
