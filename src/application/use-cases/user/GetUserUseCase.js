class GetUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  
  async execute(id) {
    try {
      if ( !id ) throw new Error("id required to get");
  
      const user = await this.userRepository.get(id);
  
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
  
module.exports = GetUserUseCase;
  