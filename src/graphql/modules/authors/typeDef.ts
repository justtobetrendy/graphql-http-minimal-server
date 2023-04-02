import gql from "graphql-tag";

export const typeDef = gql`
  type Author {
    id: Int
    name: String
  }

  type Query {
    authors: [Author]
    author(id: Int!): Author
  }
`;
