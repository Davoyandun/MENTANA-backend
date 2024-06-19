/* eslint-disable no-undef */
const CreateTherapistUseCase = require("../../src/application/use-cases/therapist/CreateTherapistUseCase");
const Therapist = require("../../src/domain/entities/Therapist");

describe("CreateTherapistUseCase", () => {
  let createTherapistUseCase;
  let mockTherapistRepository;

  beforeEach(() => {
    mockTherapistRepository = {
      create: jest.fn(),
    };
    createTherapistUseCase = new CreateTherapistUseCase(mockTherapistRepository);
  });

  it("should create a therapist successfully", async () => {
    const therapistData = {
      name: "John Doe",
      speciality: "Psychology",
      description: "Experienced therapist",
      password: "password123",
      email: "john.doe@example.com",
      phone: "1234567890",
      image_url: "http://example.com.ar/image",
    };

    const savedTherapist = { id: 1, ...therapistData };
    mockTherapistRepository.create.mockResolvedValue(savedTherapist);

    const result = await createTherapistUseCase.execute(therapistData);

    expect(mockTherapistRepository.create).toHaveBeenCalledWith(expect.any(Therapist));
    expect(result).toEqual(savedTherapist);
  });

  it("should throw an error if creation data is missing", async () => {
    const therapistData = {
      name: "John Doe",
      speciality: "Psychology",
      // Falta el campo description
      password: "password123",
      email: "john.doe@example.com",
      phone: "1234567890",
    };

    await expect(createTherapistUseCase.execute(therapistData)).rejects.toThrow("Creation data missing");
  });
});