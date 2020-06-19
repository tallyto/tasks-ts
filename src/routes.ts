import {Router} from 'express'
import {getTasks} from './controller/TasksController'

const routes = Router()

routes.get("/tasks",getTasks)

export default routes