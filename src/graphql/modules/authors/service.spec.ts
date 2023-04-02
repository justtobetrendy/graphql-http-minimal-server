import "reflect-metadata";

import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { IAuthorsRepository } from "./repository";
import { IAuthorsService, AuthorsService } from "./service";

describe("AuthorService", () => {
  let service: IAuthorsService;
  let mockRepository: jest.Mocked<IAuthorsRepository>;

  beforeEach(() => {
    mockRepository = {
      findById: jest.fn(),
      findAll: jest.fn(),
    } as jest.Mocked<IAuthorsRepository>;

    service = new AuthorsService(mockRepository);
  });

  describe("loadAuthorById", () => {
    it("should not call the repository more than once per author", async () => {
      mockRepository.findById.mockImplementation((id: number) => ({
        _id: id,
        name: `Author ${id}`,
      }));

      const firstCall = await service.loadById(1);
      const secondCall = await service.loadById(1);

      expect(mockRepository.findById).toHaveBeenCalledTimes(1);
      expect(secondCall?.name).toBe(firstCall?.name);
    });
  });
});
