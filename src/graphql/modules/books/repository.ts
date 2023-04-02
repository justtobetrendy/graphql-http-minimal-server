import { injectable } from "inversify";
import { BookDbModel } from "./dbmodels";

export interface IBooksRepository {
  findAll: () => BookDbModel[];
  add: (newBook: BookDbModel) => BookDbModel; // ommit "_id" ?
}

const inMemoryData: BookDbModel[] = [
  {
    _id: 1,
    title: "The Awakening",
    authorId: 2,
  },
  {
    _id: 2,
    title: "City of Glass",
    authorId: 1,
  },
  {
    _id: 3,
    title: "Another book",
    authorId: 1,
  },
];

@injectable()
export class BooksInMemoryRepository implements IBooksRepository {
  findAll() {
    return inMemoryData;
  }

  add(newBook: BookDbModel) {
    const book = {
      ...newBook,
      _id: inMemoryData.length + 1,
    };

    inMemoryData.push(book);

    return book;
  }
}
