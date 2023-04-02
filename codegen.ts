import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // schema: "http://localhost:4000",
  schema: "./src/graphql/modules/**/typeDef.ts",
  generates: {
    "src/graphql/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        mappers: {
          Book: "../modules/books#BookDbModel",
          Author: "../modules/authors#AuthorDbModel",
        },
        contextType: "../context#ServerOperationContext",
      },
    },
    "src/graphql/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
