import { Router, Request, Response } from "express";
import { ProjectController } from "@/api/controllers/project";
import { CreateProject } from "@/application/usecases/project";

//const createProject = new CreateProject

class ProjectRouter {
    private route: Router;
    //private projectController: ProjectController;

    constructor() {
        this.route = Router();
        //this.projectController = new ProjectController(CreateProject)
    }

    public async execute(app: Router) {
        
        app.use("/project", this.route)

        this.route.get("/", (req: Request, res:Response) => {
            res.status(200).json({msg: "hello"})
        })

        this.route.post("/create-project", )
    }
}



export default ProjectRouter;