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

export interface WebsiteResponse extends BasicResponse {
  data: Array<Website>
}

export interface Account {
  website: string
  userName: string
  password: string
}

export interface AccountResponse extends BasicResponse {
  data: Array<Account>
}
