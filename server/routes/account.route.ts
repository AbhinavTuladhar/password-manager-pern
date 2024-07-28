import { Router } from 'express'
import { addAccount } from '../controllers/account.controller'

const accountRouter = Router()

accountRouter.use('/', addAccount)

export default accountRouter
