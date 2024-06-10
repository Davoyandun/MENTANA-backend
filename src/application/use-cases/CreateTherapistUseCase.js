const Therapist = require("../../domain/entities/Therapist");

class CreateTherapistUseCase {
  constructor(therapistRepository) {
    this.therapistRepository = therapistRepository;
  }

  async execute(therapistData) {
    // Validación de datos de entrada
    if (
      !therapistData.name ||
      !therapistData.speciality ||
      !therapistData.description ||
      !therapistData.password ||
      !therapistData.email ||
      !therapistData.phone
    ) {
      throw new Error("Faltan datos de creación");
    }

    // Crear la entidad Terapeuta
    const therapist = new Therapist(
      null, // El ID se generará en la base de datos
      therapistData.name,
      therapistData.speciality,
      therapistData.description,
      therapistData.password,
      therapistData.email,
      therapistData.phone
    );

    // Guardar la entidad en el repositorio
    const savedTherapist = await this.therapistRepository.create(therapist);

    // Retornar el terapeuta creado
    return savedTherapist;
  }
}

module.exports = CreateTherapistUseCase;
