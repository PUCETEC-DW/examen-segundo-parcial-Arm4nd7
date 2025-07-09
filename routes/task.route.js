import { Router } from "express";
import { getAllTask } from "../controllers/task.controllers.js"

const route = Router()

route.get('/tasks', getAllTask  )
route.get('/tasks/:id', getAllTask  )


export default route
