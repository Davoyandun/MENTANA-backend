const CreateTherapistUseCase = require("../../application/use-cases/therapist/CreateTherapistUseCase");
const GetTherapistUseCase = require("../../application/use-cases/therapist/GetTherapistUseCase");
const UpdateTherapistUseCase = require("../../application/use-cases/therapist/UpdateTherapistUseCase");
const DeleteTherapistUseCase = require("../../application/use-cases/therapist/DeleteTherapistUseCase");


class TherapistController {
  constructor(therapistRepository) {
    this.createTherapistUseCase = new CreateTherapistUseCase(
      therapistRepository
    );
    this.getTherapistUseCase = new GetTherapistUseCase(
      therapistRepository
    );
    this.updateTherapistUseCase = new UpdateTherapistUseCase(
      therapistRepository
    );
    this.deleteTherapistUseCase = new DeleteTherapistUseCase(
      therapistRepository
    );
  }

  async create(req, res) {
    try {
      const therapistData = req.body;
      const newTherapist = await this.createTherapistUseCase.execute(
        therapistData
      );
      res.status(201).json(newTherapist);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async get(req, res) {
    try {
      const id = req.params.id;
      const therapist = await this.getTherapistUseCase.execute(id);
      res.status(200).json(therapist);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const updateTherapist = await this.updateTherapistUseCase.execute(
        id,
        updatedData
      );
      res.status(200).json(updateTherapist);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      await this.deleteTherapistUseCase.execute(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = TherapistController;