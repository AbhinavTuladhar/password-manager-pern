export interface BasicResponse {
  message: string
}

export interface LoginResponse extends BasicResponse {
  accessToken: string
}

export interface Website {
  id: string
  userId: string
  name: string
  url: string
  createdAt: Date
  updatedAt: Date
}

export interface WebsiteList extends BasicResponse {
  data: Array<Pick<Website, 'id' | 'name' | 'url'> & { accounts: number }>
}
export interface InnerWebsiteDetail extends Website {
  id: string
  userId: string
  accounts: Array<Omit<Account, 'website'>>
}

export interface WebsiteDetail extends BasicResponse {
  data: InnerWebsiteDetail
}

export interface Account {
  website: string
  userName: string
  password: string
}

export interface AccountResponse extends BasicResponse {
  data: {
    website: string
    accounts: Array<Account>
  }
}
