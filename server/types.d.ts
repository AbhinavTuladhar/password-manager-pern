export interface Credentials {
  userName: string
  password: string
}

export interface WebsiteBody {
  name: string
  url: string
  userId: string
}

export interface AccountBody {
  userName: string
  password: string
  websiteId: string
}

export interface AccountCreation {
  email: string
  password: string
  websiteName: string
  websiteUrl: string
  userName: string
  userId: string
}
