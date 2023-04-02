import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers, typeDefs } from "./modules";

export const buildSchema = () => makeExecutableSchema({ resolvers, typeDefs });
