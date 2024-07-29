import express from 'express'

import apiRouter from './routes/api.route'
import authenticateJWT from './middlewares/authenticateJWT'

import cors from 'cors'

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

app.listen(3000, () => console.log('Server is running on port 3000'))
