const validateProperties = require("../../../utils/validationProps.js");

class UpdateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(id, userData) {
    if ( !id ) throw new Error("id required to update");

    const isEmptyObject = data => Object.keys(data).length === 0;
    if ( isEmptyObject(userData) ) throw new Error("At least one piece of information is required to update");

    const validProperties = ["name","password","email","phone", "image_url"];

    validateProperties(userData, validProperties);

    const savedUser = await this.userRepository.update(id, userData);

    return savedUser;
  }
}

module.exports = UpdateUserUseCase;
