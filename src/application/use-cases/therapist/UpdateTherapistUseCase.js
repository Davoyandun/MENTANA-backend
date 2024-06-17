const validateProperties = require("../../../utils/validationProps.js");

class UpdateTherapistUseCase {
  constructor(therapistRepository) {
    this.therapistRepository = therapistRepository;
  }

  async execute(id, therapistData) {
    if ( !id ) throw new Error("id required to update");

    const isEmptyObject = data => Object.keys(data).length === 0;
    if ( isEmptyObject(therapistData) ) throw new Error("At least one piece of information is required to update");

    const validProperties = ["name","speciality","description","password","email","phone", "image_url", "is_admin"];

    validateProperties(therapistData, validProperties);

    const savedTherapist = await this.therapistRepository.update(id, therapistData);

    return savedTherapist;
  }
}

module.exports = UpdateTherapistUseCase;
