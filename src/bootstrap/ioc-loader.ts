import "reflect-metadata";
import { Container } from "inversify";
import { TOKENS } from "../ioc/tokens";
import {
  BooksInMemoryRepository,
  IBooksRepository,
} from "../graphql/modules/books/repository";
import { BooksService, IBooksService } from "../graphql/modules/books/service";
import {
  AuthorInMemoryRepository,
  IAuthorsRepository,
} from "../graphql/modules/authors/repository";
import {
  AuthorsService,
  IAuthorsService,
} from "../graphql/modules/authors/service";

export default async () => {
  const container = new Container();

  // books
  container
    .bind<IBooksRepository>(TOKENS.BooksRepository)
    .to(BooksInMemoryRepository);

  container.bind<IBooksService>(TOKENS.BooksService).to(BooksService);

  // authors
  container
    .bind<IAuthorsRepository>(TOKENS.AuthorsRepository)
    .to(AuthorInMemoryRepository);

  container.bind<IAuthorsService>(TOKENS.AuthorsService).to(AuthorsService);

  return container;
};
