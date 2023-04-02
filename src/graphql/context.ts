import { Container } from "inversify";
import { TOKENS } from "../ioc/tokens";
import { IAuthorsService } from "./modules/authors/service";
import { IBooksService } from "./modules/books/service";
import { OperationContext } from "graphql-http";

export type ServerOperationContext = OperationContext & {
  booksService: IBooksService;
  authorsService: IAuthorsService;
};

export const buildContext = (
  iocContainer: Container
): ServerOperationContext => {
  return {
    booksService: iocContainer.get<IBooksService>(TOKENS.BooksService),
    authorsService: iocContainer.get<IAuthorsService>(TOKENS.AuthorsService),
  };
};
