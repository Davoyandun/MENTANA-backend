class DeleteTherapistUseCase {
  constructor(therapistRepository) {
    this.therapistRepository = therapistRepository;
  }

  async execute(id) {
    // Validación de datos de entrada
    if ( !id ) throw new Error("id required to update");
    
    // Guardar la entidad en el repositorio
    const deletedTherapist = await this.therapistRepository.delete(id);
    
    if (!deletedTherapist) {
      throw new Error("Therapist not found");
    }


    // Retornar el terapeuta creado
    return deletedTherapist;
  }
}

module.exports = DeleteTherapistUseCase;
