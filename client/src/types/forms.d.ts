export interface RegisterProps {
  password: string
  confirmPassword: string
}

export type RegisterFields = keyof RegisterProps
