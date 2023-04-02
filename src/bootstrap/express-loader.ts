import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { Container } from "inversify";
import { createHandler } from "graphql-http/lib/use/express";
import { buildSchema } from "../graphql/schema";
import { buildContext } from "../graphql/context";

export default async (container: Container) => {
  dotenv.config();

  const app: Express = express();
  const port = process.env.PORT;

  console.log();

  app.get("/", (req: Request, res: Response) => {
    // TODO: should only be available in DEV !!
    res.sendFile(path.resolve("./src/static/graphiql.html"));
  });

  app.post(
    "/graphql",
    createHandler({
      schema: buildSchema(),
      context: async (req, args) => buildContext(container),
    })
  );

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });

  return app;
};
