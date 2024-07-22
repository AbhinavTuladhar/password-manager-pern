import { Router } from 'express'
import authRouter from './auth.route'

const apiRouter = Router()

apiRouter.use('/master-user', authRouter)

export default apiRouter
