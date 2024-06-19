class DeleteTherapistUseCase {
  constructor(therapistRepository) {
    this.therapistRepository = therapistRepository;
  }

  async execute(id) {
    try {
      if ( !id ) throw new Error("id required to delete");

      const deletedTherapist = await this.therapistRepository.delete(id);

      return deletedTherapist;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = DeleteTherapistUseCase;
