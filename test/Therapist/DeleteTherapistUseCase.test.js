/* eslint-disable no-undef */
const DeleteTherapistUseCase = require("../../src/application/use-cases/therapist/DeleteTherapistUseCase");

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
    await expect(deleteTherapistUseCase.execute()).rejects.toThrow("id required to delete");
  });

  it("should throw an error if therapist is not found", async () => {
    const therapistId = 1;
    mockTherapistRepository.delete.mockRejectedValue(new Error(`Error deleting therapist: Therapist with id ${therapistId} not found`));

    await expect(deleteTherapistUseCase.execute(therapistId)).rejects.toThrow(`Error deleting therapist: Therapist with id ${therapistId} not found`);
  });
});