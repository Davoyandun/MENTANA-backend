/* eslint-disable no-undef */
const TherapistController = require("../../src/adapters/controllers/TherapistController");

describe("TherapistController", () => {
  let therapistController;
  let mockTherapistRepository;

  beforeEach(() => {
    mockTherapistRepository = {};
    therapistController = new TherapistController(mockTherapistRepository);
  });

  it("should create a therapist successfully", async () => {
    const req = {
      body: {
        name: "John Doe",
        speciality: "Psychology",
        description: "Experienced therapist",
        password: "password123",
        email: "john.doe@example.com",
        phone: "1234567890",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const newTherapist = { id: 1, ...req.body };
    therapistController.createTherapistUseCase.execute = jest.fn().mockResolvedValue(newTherapist);

    await therapistController.create(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(newTherapist);
  });

  it("should return an error if creation fails", async () => {
    const req = {
      body: {
        name: "John Doe",
        speciality: "Psychology",
        description: "Experienced therapist",
        password: "password123",
        email: "john.doe@example.com",
        phone: "1234567890",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const errorMessage = "Creation failed";
    therapistController.createTherapistUseCase.execute = jest.fn().mockRejectedValue(new Error(errorMessage));

    await therapistController.create(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });

  it("should get a therapist successfully", async () => {
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const therapist = {
      id: 1,
      name: "John Doe",
      speciality: "Psychology",
      description: "Experienced therapist",
      email: "john.doe@example.com",
      phone: "1234567890",
    };
    therapistController.getTherapistUseCase.execute = jest.fn().mockResolvedValue(therapist);

    await therapistController.get(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(therapist);
  });
  it("should return an error if therapist is not found", async () => {
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  
    const errorMessage = "Therapist not found";
    therapistController.getTherapistUseCase.execute = jest.fn().mockRejectedValue(new Error(errorMessage));
  
    await therapistController.get(req, res);
  
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });

  it("should update a therapist successfully", async () => {
    const req = {
      params: {
        id: 1,
      },
      body: {
        name: "John Doe",
        speciality: "Psychology",
        description: "Experienced therapist",
        password: "password123",
        email: "john.doe@example.com",
        phone: "1234567890",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const updatedTherapist = { id: 1, ...req.body };
    therapistController.updateTherapistUseCase.execute = jest.fn().mockResolvedValue(updatedTherapist);

    await therapistController.update(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(updatedTherapist);
  });
  it("should return an error if update fails", async () => {
    const req = {
      params: {
        id: 1,
      },
      body: {
        name: "John Doe",
        speciality: "Psychology",
        description: "Experienced therapist",
        password: "password123",
        email: "john.doe@example.com",
        phone: "1234567890",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const errorMessage = "Update failed";
    therapistController.updateTherapistUseCase.execute = jest.fn().mockRejectedValue(new Error(errorMessage));

    await therapistController.update(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });

  it("should delete a therapist successfully", async () => {
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    therapistController.deleteTherapistUseCase.execute = jest.fn().mockResolvedValue();

    await therapistController.delete(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalledWith();
  });    
  it("should return an error if delete fails", async () => {
    const req = {
      params: {
        id: 1,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const errorMessage = "Delete failed";
    therapistController.deleteTherapistUseCase.execute = jest.fn().mockRejectedValue(new Error(errorMessage));

    await therapistController.delete(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});