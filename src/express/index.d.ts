import {Document, Model} from 'mongoose';

declare global{
    namespace Express{}

    namespace Models{
        //vendor models
        export type WorkFlowModel = Model<Document>;
    }
}