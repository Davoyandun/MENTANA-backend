class GetTherapistUseCase {
  constructor(therapistRepository) {
    this.therapistRepository = therapistRepository;
  }

  async execute(id) {
    try {
      if ( !id ) throw new Error("id required to get");

      const therapist = await this.therapistRepository.get(id);

      return therapist;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = GetTherapistUseCase;
