/* eslint-disable no-undef */
const GetTherapistUseCase = require("../../src/application/use-cases/therapist/GetTherapistUseCase");

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
    await expect(getTherapistUseCase.execute()).rejects.toThrow("id required to get");
  });

  it("should throw an error if therapist is not found", async () => {
    const therapistId = 1;
    mockTherapistRepository.get.mockRejectedValue(new Error(`Error getting therapist by ID: user ${therapistId} not found`));

    await expect(getTherapistUseCase.execute(therapistId)).rejects.toThrow(`Error getting therapist by ID: user ${therapistId} not found`);
  });
});