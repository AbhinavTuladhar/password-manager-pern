import { AccountList } from '@/types/response'

import Api from './api.service'

class AccountService {
  static async getAccounts() {
    try {
      const response = await Api.get<AccountList>('/account', {
        validateStatus: status =>
          (status >= 200 && status < 300) || (status >= 400 && status !== 409),
      })
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default AccountService
