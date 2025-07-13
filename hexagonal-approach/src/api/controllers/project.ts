import { Request, Response } from "express"
import { CreateProject } from "@/application/usecases/project"

export class ProjectController {
    constructor(private readonly createProjectController: CreateProject) {}

    async createProject(req: Request, res: Response) {
        const project = await this.createProjectController.execute(req)
        res.status(201).json(project)
    }
}