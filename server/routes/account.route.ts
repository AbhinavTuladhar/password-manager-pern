import { Router } from 'express'
import { addAccount, getAllAccounts } from '../controllers/account.controller'

const accountRouter = Router()

accountRouter.get('/', getAllAccounts)
accountRouter.post('/', addAccount)

export default accountRouter
