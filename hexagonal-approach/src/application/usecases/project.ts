import { IProjectRepository } from "@domain/repositories/project"
import { Project } from "../../domain/entitles/project";
import {Request} from "express"

export class CreateProject {
    constructor(private ProjectRepository: IProjectRepository) {}

    async execute (req:Request) : Promise<Project>{
        const {job_number, company_name, service_type} = req.body

        if(!job_number || !company_name) {
            throw new Error("Please provide the fields")
        }

        const project = new Project(
            job_number,
            company_name,
            service_type,
        )

        console.log(1, project)

        const projectResponse = this.ProjectRepository.create(project)

        return projectResponse

    }
}


