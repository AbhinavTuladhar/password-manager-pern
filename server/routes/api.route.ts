import { Router } from 'express'
import authRouter from './auth.route'
import websiteRouter from './website.route'
import authenticateJWT from '../middlewares/authenticateJWT'
import accountRouter from './account.route'

const apiRouter = Router()

apiRouter.use('/master-user', authRouter)
apiRouter.use('/website', authenticateJWT, websiteRouter)
apiRouter.use('/account', authenticateJWT, accountRouter)

export default apiRouter
