import axios from 'axios'

import { BasicResponse, LoginResponse } from '../types/response'

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
          validateStatus: status =>
            (status >= 200 && status < 300) || (status >= 400 && status !== 409),
        },
      )
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async login(password: string) {
    const loginUrl = import.meta.env.VITE_BACKEND_URL + '/master-user/login'

    try {
      const response = await axios.post<LoginResponse>(
        loginUrl,
        { password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          validateStatus: status =>
            (status >= 200 && status < 300) || (status >= 400 && status !== 401 && status !== 404),
        },
      )
      return response
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default AuthService
