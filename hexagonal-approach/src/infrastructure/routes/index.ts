import {Router} from "express"
import Project from "./project"

const router = Router()

const project = new Project()

project.execute(router)

export default router