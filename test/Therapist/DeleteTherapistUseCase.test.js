/* eslint-disable no-undef */
const DeleteTherapistUseCase = require("../../src/application/use-cases/DeleteTherapistUseCase");

describe("DeleteTherapistUseCase", () => {
  let deleteTherapistUseCase;
  let mockTherapistRepository;

  beforeEach(() => {
    mockTherapistRepository = {
      delete: jest.fn(),
    };
    deleteTherapistUseCase = new DeleteTherapistUseCase(mockTherapistRepository);
  });

  it("should delete a therapist successfully", async () => {
    const deletedTherapist = { id: 1, name: "John Doe" };
    mockTherapistRepository.delete.mockResolvedValue(deletedTherapist);

    const result = await deleteTherapistUseCase.execute(1);

    expect(mockTherapistRepository.delete).toHaveBeenCalledWith(1);
    expect(result).toEqual(deletedTherapist);
  });

  it("should throw an error if id is not provided", async () => {
    await expect(deleteTherapistUseCase.execute()).rejects.toThrow("id required to update");
  });

  it("should throw an error if therapist is not found", async () => {
    mockTherapistRepository.delete.mockResolvedValue(null);

    await expect(deleteTherapistUseCase.execute(1)).rejects.toThrow("Therapist not found");
  });
});