import crypto from 'crypto'
export const encrypt = (text: string) => {
  const bufferKey = Buffer.from(process.env.AES_KEY, 'base64')
  const bufferIv = Buffer.from(process.env.AES_IV, 'base64')

  const cipher = crypto.createCipheriv('aes-256-cbc', bufferKey, bufferIv)
  let encrypted = cipher.update(text, 'utf8', 'base64')
  encrypted += cipher.final('base64')
  return encrypted
}

export const decrypt = (encryptedData: string) => {
  const bufferKey = Buffer.from(process.env.AES_KEY, 'base64')
  const bufferIv = Buffer.from(process.env.AES_IV, 'base64')

  const deciphered = crypto.createDecipheriv('aes-256-cbc', bufferKey, bufferIv)
  console.log(deciphered)
  let decrypted = deciphered.update(encryptedData, 'base64', 'utf8')
  decrypted += deciphered.final('utf8')
  return decrypted
}
