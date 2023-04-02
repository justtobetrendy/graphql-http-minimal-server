import "reflect-metadata";

import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { BookDbModel } from "./dbmodels";
import { IBooksRepository } from "./repository";
import { BooksService, IBooksService } from "./service";

describe("BooksService", () => {
  let service: IBooksService;
  let mockRepository: jest.Mocked<IBooksRepository>;

  beforeEach(() => {
    mockRepository = {
      findAll: jest.fn(),
      add: jest.fn(),
    } as jest.Mocked<IBooksRepository>;

    service = new BooksService(mockRepository);
  });

  it("should map book input to db model", () => {
    service.add({ title: "my book title", authorId: 1 });

    expect(mockRepository.add).toHaveBeenCalledWith({
      _id: 0,
      title: "my book title",
      authorId: 1,
    });
  });
});
