import { BasicResponse, LoginResponse } from '../types/response'

import Api from './api.service'

class AuthService {
  static async register(password: string) {
    try {
      const response = await Api.post<BasicResponse>(
        '/master-user/register',
        { password },
        {
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
    try {
      const response = await Api.post<LoginResponse>(
        '/master-user/login',
        { password },
        {
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

  static async logout() {
    try {
      const response = await Api.post<BasicResponse>(
        '/master-user/logout',
        {},
        {
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
}

export default AuthService
