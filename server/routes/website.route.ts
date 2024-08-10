import { Router } from 'express'
import { addWebsite, getWebsiteDetail, getAllWebsites } from '../controllers/website.controller'
import { addAccount } from '../controllers/account.controller'

const websiteRouter = Router()

websiteRouter.post('/', addWebsite)
websiteRouter.get('/', getAllWebsites)
websiteRouter.post('/:websiteId/account', addAccount)
websiteRouter.get('/:websiteId', getWebsiteDetail)

export default websiteRouter
