import { Router, Request, Response } from "express";
import { ProjectController } from "../../api/controllers/project";
import { CreateProject } from "../../application/usecases/project";
import { ProjectModel } from "../db/models/project";
import { IProjectRepository } from '../../domain/repositories/project';

const projectUseCase = new CreateProject(ProjectModel as unknown as IProjectRepository);

class ProjectRouter {
    private route: Router;
    projectController: ProjectController;

    constructor() {
        this.route = Router();
        this.projectController = new ProjectController(projectUseCase)
    }

    public async execute(app: Router) {
        
        app.use("/project", this.route)

        this.route.get("/", (req: Request, res:Response) => {
            res.status(200).json({msg: "hello"})
        })

        this.route.post("/create", (req: Request, res: Response) => {
            this.projectController.createProject(req, res)
        })
    }
}



export default ProjectRouter;