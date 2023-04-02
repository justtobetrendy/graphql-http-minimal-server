import DataLoader from "dataloader";
import { injectable, inject } from "inversify";
import { TOKENS } from "../../../ioc/tokens";
import { AuthorDbModel } from "./dbmodels";
import { IAuthorsRepository } from "./repository";

export interface IAuthorsService {
  findAll: () => AuthorDbModel[];
  findById: (id: number) => AuthorDbModel | null;
  loadById: (id: number) => Promise<AuthorDbModel | null>;
}

@injectable()
export class AuthorsService implements IAuthorsService {
  private dataLoaderById;

  constructor(
    @inject(TOKENS.AuthorsRepository)
    private readonly repository: IAuthorsRepository
  ) {
    this.dataLoaderById = new DataLoader(async (ids: readonly number[]) => {
      return ids.map((id) => this.findById(id));
    });
  }

  findAll() {
    // Authorization
    return this.repository.findAll();
  }

  findById(id: number) {
    // Authorization
    return this.repository.findById(id);
  }

  async loadById(id: number) {
    return this.dataLoaderById.load(id);
  }
}
