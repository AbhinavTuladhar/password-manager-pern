import { Router } from 'express'
import { addWebsite } from '../controllers/website.controller'

const websiteRouter = Router()

websiteRouter.post('/', addWebsite)

export default websiteRouter
