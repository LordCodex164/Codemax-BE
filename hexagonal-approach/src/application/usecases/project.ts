import { IProjectRepository } from "@domain/repositories/project"
import { Project } from "@entities/project";
import {request, Request, Response} from "express"

export class CreateProject {
    constructor(private ProjectRepository: IProjectRepository) {}

    async execute (req:Request) : Promise<Project>{
        const {id, name, description} = req.body

        if(!name || description) {
            throw new Error("Please provide the fields")
        }

        const project = new Project(
            id,
            name,
            description
        )

        const projectResponse = this.ProjectRepository.create(project)

        return projectResponse

    }
}


