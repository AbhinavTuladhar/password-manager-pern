import { WebsiteDetail, WebsiteList } from '@/types/response'

import Api from './api.service'

class WebsiteService {
  static async getWebsites() {
    try {
      const response = await Api.get<WebsiteList>('/website', {
        validateStatus: status =>
          (status >= 200 && status < 300) || (status >= 400 && status !== 409),
      })
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  static async getWebsiteDetail(websiteId: string) {
    try {
      const response = await Api.get<WebsiteDetail>(`/website/${websiteId}`, {
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

export default WebsiteService
