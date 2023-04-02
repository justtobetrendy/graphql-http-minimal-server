import { ServerOperationContext } from "../../context";
import { Resolvers } from "../../generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    books: (_, __, context: ServerOperationContext) =>
      context.booksService.findAll(),
  },

  Book: {
    id: (parent) => parent._id,
    title: (parent) => parent.title,
    author: async (parent, _, context) =>
      context.authorsService.loadById(parent.authorId),
  },

  Mutation: {
    addBook: (_parent, payload, context) =>
      context.booksService.add(payload.input),
  },
};
