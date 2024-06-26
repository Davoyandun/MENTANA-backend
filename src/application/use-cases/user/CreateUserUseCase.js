const User = require("../../../domain/entities/User");

class CreateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(userData) {
    if (
      !userData.name ||
      !userData.password ||
      !userData.email ||
      !userData.image_url ||
      !userData.phone
    ) {
      throw new Error("Creation data missing");
    }

    const user = new User(userData);

    const savedUser = await this.userRepository.create(user);

    return savedUser;
  }
}

module.exports = CreateUserUseCase;
