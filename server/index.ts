import express from 'express'

import apiRouter from './routes/api.route'
import authenticateJWT from './middlewares/authenticateJWT'

import cors from 'cors'
import { decrypt, encrypt } from './utils/crypto.utils'

const app = express()

app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))
app.use(apiRouter)

app.get('/', (req, res) => {
  console.log(req.session)
  return res.status(200).json({ message: 'Hello World' })
})

app.get('/test', authenticateJWT, (req, res) => {
  console.log(req.session)
  return res.status(200).json({ message: 'This is a protected route.' })
})

app.get('/aes-test', (req, res) => {
  const example = 'This is an example of a long password.'
  const encrypted = encrypt(example)

  const decrypted = decrypt(encrypted)

  return res.status(200).json({ data: example, encrypted, decrypted })
})

app.listen(3000, () => console.log('Server is running on port 3000'))
