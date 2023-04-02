import { injectable } from "inversify";
import { AuthorDbModel } from "./dbmodels";

export interface IAuthorsRepository {
  findAll: () => AuthorDbModel[];
  findById: (id: number) => AuthorDbModel | null;
}

const inMemoryData: AuthorDbModel[] = [
  {
    _id: 1,
    name: "Kate Chopin",
  },
  {
    _id: 2,
    name: "Paul Auster",
  },
];

@injectable()
export class AuthorInMemoryRepository implements IAuthorsRepository {
  findAll() {
    return inMemoryData;
  }

  findById(id: number) {
    return inMemoryData.find((author) => author._id === id) || null;
  }
}
