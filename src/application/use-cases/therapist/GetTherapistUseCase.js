class GetTherapistUseCase {
  constructor(therapistRepository) {
    this.therapistRepository = therapistRepository;
  }

  async execute(id) {
    if ( !id ) throw new Error("id required");

    const therapist = await this.therapistRepository.get(id);

    return therapist;
  }
}

module.exports = GetTherapistUseCase;
