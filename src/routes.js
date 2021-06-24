import express from 'express'
import { storeUser } from './controller/UserController'

const routes = express.Router()

routes.post('/users', storeUser)

export default routes
