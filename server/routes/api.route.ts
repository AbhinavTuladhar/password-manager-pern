import { Router } from 'express'
import authRouter from './auth.route'
import websiteRouter from './website.route'
import authenticateJWT from '../middlewares/authenticateJWT'

const apiRouter = Router()

apiRouter.use('/master-user', authRouter)
apiRouter.use('/website', authenticateJWT, websiteRouter)

export default apiRouter
