import { Router } from 'express'
import { validate }           from '../middleware/validate.js'
import { contactController }  from '../controllers/contact.controller.js'


const contactRouter = Router()

contactRouter.post('/', validate, contactController)

export default contactRouter