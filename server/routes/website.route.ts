import { Router } from 'express'
import { addWebsite, getAllWebsites } from '../controllers/website.controller'

const websiteRouter = Router()

websiteRouter.post('/', addWebsite)
websiteRouter.get('/', getAllWebsites)

export default websiteRouter
