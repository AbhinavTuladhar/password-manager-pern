import { Router } from 'express'
import { addWebsite, getAllWebsites } from '../controllers/website.controller'
import { addAccount } from '../controllers/account.controller'

const websiteRouter = Router()

websiteRouter.post('/', addWebsite)
websiteRouter.get('/', getAllWebsites)
websiteRouter.post('/:websiteId/account', addAccount)

export default websiteRouter
