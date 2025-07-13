import * as express from "express";
import loaders from "../src/infrastructure/express"


const startServer = async () => {
  const app = express.default();
  await loaders(app)
  app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
}

startServer()