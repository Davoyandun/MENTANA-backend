/* eslint-disable no-undef */
const UpdateTherapistUseCase = require("../../src/application/use-cases/UpdateTherapistUseCase");
const Therapist = require("../../src/domain/entities/Therapist");

describe("UpdateTherapistUseCase", () => {
  let updateTherapistUseCase;
  let mockTherapistRepository;

  beforeEach(() => {
    mockTherapistRepository = {
      update: jest.fn(),
    };
    updateTherapistUseCase = new UpdateTherapistUseCase(mockTherapistRepository);
  });

  it("should update a therapist successfully", async () => {
    const therapistData = {
      id: 1,
      name: "John Doe",
      speciality: "Psychology",
      description: "Experienced therapist",
      password: "password123",
      email: "john.doe@example.com",
      phone: "1234567890",
    };

    const updatedTherapist = { ...therapistData };
    mockTherapistRepository.update.mockResolvedValue(updatedTherapist);

    const result = await updateTherapistUseCase.execute(1, therapistData);

    expect(mockTherapistRepository.update).toHaveBeenCalledWith(1, expect.any(Therapist));
    expect(result).toEqual(updatedTherapist);
  });

  it("should throw an error if id is not provided", async () => {
    const therapistData = {
      name: "John Doe",
      speciality: "Psychology",
      description: "Experienced therapist",
      password: "password123",
      email: "john.doe@example.com",
      phone: "1234567890",
    };

    await expect(updateTherapistUseCase.execute(null, therapistData)).rejects.toThrow("id required to update");
  });

  it("should throw an error if no therapist data is provided", async () => {
    await expect(updateTherapistUseCase.execute(1, {})).rejects.toThrow("At least one piece of information is required to update");
  });
});