import { Resolvers } from "../../generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    authors: (_, __, context) => context.authorsService.findAll(),
    author: (_, payload, context) =>
      context.authorsService.findById(payload.id),
  },

  Author: {
    id: (parent) => parent._id,
  },
};
