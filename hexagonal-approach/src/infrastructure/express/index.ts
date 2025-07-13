import * as express from "express"
import "reflect-metadata"
import server from "../../infrastructure/express/server"
import { connectToMongo} from "../db/mongoose"
import config from "../../config/index"

export default async (app:express.Application) => {
    try{
      //db connection
      connectToMongo(config.database.mongoUrl || "")
     //server initialization
     await server(app)
     console.log("server loaded")  
    }
    catch(err) {
        console.log(err)
    }
}