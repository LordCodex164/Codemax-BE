import express, {Request, Response, Router} from 'express';

const router = express.Router();

export default (app:Router) => {
    app.use('/workflow', router);
    router.get('/', (req: Request, res: Response) => {
        res.send('Hello from workflow');
    });
}