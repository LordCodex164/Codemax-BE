import { Project } from "@entities/project";

export interface IProjectRepository {
    create(project: Project): Promise<Project>
    findAll(): Promise<Project[]>
    findById(id: string): Promise<Project | null>
    update(project: Project): Promise<Project | null>
    delete(id: string): Promise<void>
}