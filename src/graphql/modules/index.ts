import { typeDef as Books, resolvers as booksResolvers } from "./books";
import { typeDef as Authors, resolvers as authorsResolvers } from "./authors";

export const typeDefs = [Books, Authors];
export const resolvers = [booksResolvers, authorsResolvers];
