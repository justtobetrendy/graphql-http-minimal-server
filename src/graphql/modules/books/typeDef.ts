import gql from "graphql-tag";

export const typeDef = gql`
  type Book {
    id: Int!
    title: String!
    author: Author #could resolve to null
  }

  input BookInput {
    title: String!
    authorId: Int!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(input: BookInput!): Book
  }
`;
