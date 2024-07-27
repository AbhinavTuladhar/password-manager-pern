import express from 'express'

import apiRouter from './routes/api.route'
import { loggingMiddleware } from './middlewares/login'

const app = express()
app.use(loggingMiddleware)

app.use(express.json())
app.use(apiRouter)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' })
})

app.listen(3000, () => console.log('Server is running on port 3000'))
