import express from 'express'
import UserController from './controller/UserController'
import SessionController from './controller/SessionController'

const routes = express.Router()

routes.post('/users', UserController.store)

routes.post('/auth', SessionController.store)

export default routes
