import { Router } from 'express'
import { addAccount } from '../controllers/account.controller'

const accountRouter = Router()

accountRouter.post('/', addAccount)

export default accountRouter
