const Therapist = require("../../../domain/entities/Therapist");

class CreateTherapistUseCase {
  constructor(therapistRepository) {
    this.therapistRepository = therapistRepository;
  }

  async execute(therapistData) {
    if (
      !therapistData.name ||
      !therapistData.speciality ||
      !therapistData.description ||
      !therapistData.password ||
      !therapistData.email ||
      !therapistData.image_url ||
      !therapistData.phone
    ) {
      throw new Error("Creation data missing");
    }

    const therapist = new Therapist(therapistData);

    const savedTherapist = await this.therapistRepository.create(therapist);

    return savedTherapist;
  }
}

module.exports = CreateTherapistUseCase;
