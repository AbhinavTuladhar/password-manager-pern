import { Router } from 'express'
import { addAccount, deleteAccount, getAllAccounts } from '../controllers/account.controller'

const accountRouter = Router()

accountRouter.get('/', getAllAccounts)
accountRouter.post('/', addAccount)
accountRouter.delete('/', deleteAccount)

export default accountRouter
