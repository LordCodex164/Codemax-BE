import { Router } from 'express';
import workflow from './workflow/workflow';

export default () => {
   const app = Router();
    workflow(app);
    return app;
}