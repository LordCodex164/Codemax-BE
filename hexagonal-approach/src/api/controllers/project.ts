import { Request, Response } from "express"
import { CreateProject } from "@/application/usecases/project"

export class ProjectController {
    constructor(private readonly  createProjectUseCase: CreateProject) {}

    async createProject(req: Request, res: Response) {
        const project = await this.createProjectUseCase.execute(req)
        res.status(201).json({project, msg: "Project Created Successfully"})
    }
}