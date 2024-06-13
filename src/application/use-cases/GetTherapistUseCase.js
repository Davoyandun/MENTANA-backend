class GetTherapistUseCase {
  constructor(therapistRepository) {
    this.therapistRepository = therapistRepository;
  }

  async execute(id) {
    // Validación de datos de entrada
    if ( !id ) throw new Error("id required to update");

    // Buscar la entidad en el repositorio
    const therapist = await this.therapistRepository.get(id);

    if (!therapist) {
      throw new Error("Therapist not found");
    }

    // Retornar el terapeuta encontrado
    return therapist;
  }
}

module.exports = GetTherapistUseCase;
