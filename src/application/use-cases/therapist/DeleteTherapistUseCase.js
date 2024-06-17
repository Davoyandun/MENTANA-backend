class DeleteTherapistUseCase {
  constructor(therapistRepository) {
    this.therapistRepository = therapistRepository;
  }

  async execute(id) {
    if ( !id ) throw new Error("id required to delete");

    const deletedTherapist = await this.therapistRepository.delete(id);

    return deletedTherapist;
  }
}

module.exports = DeleteTherapistUseCase;
