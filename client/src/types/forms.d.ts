export interface RegisterProps {
  password: string
  confirmPassword: string
}

export interface LoginProps {
  password: string
}

export interface AddAccountProps {
  userId: string
  userName: string
  password: string
  email: string
  websiteName: string
  websiteUrl: string
}
