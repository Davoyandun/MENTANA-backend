

class UpdateTherapistUseCase {
  constructor(therapistRepository) {
    this.therapistRepository = therapistRepository;
  }

  async execute(id, therapistData) {
    // Validación de datos de entrada
    if (!id) throw new Error("id required to update");

    const isEmptyObject = obj => Object.keys(obj).length === 0;
    if (isEmptyObject(therapistData)) throw new Error("At least one piece of information is required to update");

  
    // Guardar la entidad en el repositorio
    const savedTherapist = await this.therapistRepository.update(id, therapistData);

    // Retornar el terapeuta creado
    return savedTherapist;
  }
}

module.exports = UpdateTherapistUseCase;