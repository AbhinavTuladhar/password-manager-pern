export interface BasicResponse {
  message: string
}

export interface LoginResponse extends BasicResponse {
  accessToken: string
  userId: string
}

export interface Website {
  id: string
  userId: string
  name: string
  url: string
  createdAt: Date
  updatedAt: Date
}

export type SimpleWebsite = Pick<Website, 'id' | 'name' | 'url'> & { accounts: number }

export interface WebsiteList extends BasicResponse {
  data: Array<SimpleWebsite>
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
  id: string
  userName: string
  password: string
  websiteName: string
  websiteUrl: string
  email: string
}

export interface AccountList extends BasicResponse {
  data: Array<Account>
}
