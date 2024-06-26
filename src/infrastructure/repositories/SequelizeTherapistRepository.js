const BaseRepository = require("../../domain/repositories/BaseRepository");
const Therapist = require("../../domain/entities/Therapist");

class SequelizeTherapistRepository extends BaseRepository {
  constructor(model) {
    super();
    this.model = model;
  }

  async create(therapist) {
    try {
      const [TherapistCreated, isCreated] = await this.model.findOrCreate({
        where: {
          name: therapist.name,
          email: therapist.email,
          is_deleted: false
        },
        defaults: {
          name: therapist.name,
          speciality: therapist.speciality,
          description: therapist.description,
          password: therapist.password,
          email: therapist.email,
          phone: therapist.phone,
          image_url: therapist.image_url,
          is_admin: therapist.is_admin
        }
      });
      if(!isCreated) throw new Error("existing name and/or email");
      return new Therapist(TherapistCreated);
    } catch (error) {
      throw new Error(`Error saving therapist: ${error.message}`);
    }
  }

  async get(id) {
    try {
      const therapist = await this.model.findOne({
        where:{
          id:id,
          is_deleted: false
        }
      });
      if (!therapist)throw new Error(`user ${id} not found`);
      return new Therapist(therapist);
    } catch (error) {
      throw new Error(`Error getting therapist by ID: ${error.message}`);
    }
  }

  async update(id, updatedTerapeuta) {
    try {
      const therapist = await this.model.findOne({
        where:{
          id:id,
          is_deleted:false
        }
      });
      if (!therapist) throw new Error(`Therapist with id ${id} not found`);

      const updated = await therapist.update(updatedTerapeuta);

      return new Therapist(updated);
    } catch (error) {
      throw new Error(`Error updating therapist: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      const therapist = await this.model.findByPk(id);
      if (!therapist) throw new Error(`Therapist with id ${id} not found`);

      const updated = await therapist.update({
        is_deleted: true,
      });

      return new Therapist(updated);
    } catch (error) {
      throw new Error(`Error deleting therapist: ${error.message}`);
    }
  }
}

module.exports = SequelizeTherapistRepository;
