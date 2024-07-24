import express from 'express'
import session from 'express-session'

import apiRouter from './routes/api.route'

const app = express()

app.use(express.json())
app.use(apiRouter)

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' })
})

app.listen(3000, () => console.log('Server is running on port 3000'))
