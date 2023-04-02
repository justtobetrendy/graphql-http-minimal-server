"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
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
exports.default = config;
