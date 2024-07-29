export interface BasicResponse {
  message: string
}

export interface LoginResponse extends BasicResponse {
  accessToken: string
}
