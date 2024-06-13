/* eslint-disable no-undef */
const GetTherapistUseCase = require("../../src/application/use-cases/GetTherapistUseCase");

describe("GetTherapistUseCase", () => {
  let getTherapistUseCase;
  let mockTherapistRepository;

  beforeEach(() => {
    mockTherapistRepository = {
      get: jest.fn(),
    };
    getTherapistUseCase = new GetTherapistUseCase(mockTherapistRepository);
  });

  it("should get a therapist successfully", async () => {
    const therapist = {
      id: 1,
      name: "John Doe",
      speciality: "Psychology",
      description: "Experienced therapist",
      email: "john.doe@example.com",
      phone: "1234567890",
    };

    mockTherapistRepository.get.mockResolvedValue(therapist);

    const result = await getTherapistUseCase.execute(1);

    expect(mockTherapistRepository.get).toHaveBeenCalledWith(1);
    expect(result).toEqual(therapist);
  });

  it("should throw an error if id is not provided", async () => {
    await expect(getTherapistUseCase.execute()).rejects.toThrow("id required to update");
  });

  it("should throw an error if therapist is not found", async () => {
    mockTherapistRepository.get.mockResolvedValue(null);

    await expect(getTherapistUseCase.execute(1)).rejects.toThrow("Therapist not found");
  });
});