import express from 'express'
import UserController from './controller/UserController'

const routes = express.Router()

routes.post('/users', UserController.store)

export default routes
