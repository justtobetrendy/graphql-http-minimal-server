import { injectable, inject } from "inversify";
import { TOKENS } from "../../../ioc/tokens";
import { BookDbModel } from "./dbmodels";
import { IBooksRepository } from "./repository";
import { BookInput } from "../../generated/graphql";

export interface IBooksService {
  findAll: () => BookDbModel[];
  add: (bookInput: BookInput) => BookDbModel;
}

@injectable()
export class BooksService implements IBooksService {
  constructor(
    @inject(TOKENS.BooksRepository)
    private readonly repository: IBooksRepository
  ) {}

  findAll() {
    // Authorization
    return this.repository.findAll();
  }

  add(bookInput: BookInput) {
    // Authorization

    const newBook: BookDbModel = {
      _id: 0,
      title: bookInput.title,
      authorId: bookInput.authorId,
    };

    return this.repository.add(newBook);
  }
}
