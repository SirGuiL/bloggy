import express from 'express'
import UserController from './app/controller/UserController'
import SessionController from './app/controller/SessionController'
import PostController from './app/controller/PostController'
import authMiddleware from './app/middlewares/authentication'

const routes = express.Router()

routes.post('/users', UserController.store)
routes.post('/auth', SessionController.store)

routes.use(authMiddleware)

routes.put('/users', UserController.update)
routes.delete('/users', UserController.delete)

routes.post('/posts', PostController.store)
routes.get('/posts', PostController.index)
routes.get('/:userId/posts', PostController.indexAll)
routes.get('/posts/:postId', PostController.show)
routes.delete('/posts/:postId', PostController.delete)

export default routes
