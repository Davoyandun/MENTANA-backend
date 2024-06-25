class DeleteUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  
  async execute(id) {
    try {
      if ( !id ) throw new Error("id required to delete");
  
      const deletedUser = await this.userRepository.delete(id);
  
      return deletedUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
  
module.exports = DeleteUserUseCase;
  