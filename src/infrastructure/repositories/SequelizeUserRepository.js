const BaseRepository = require("../../domain/repositories/BaseRepository");
const User = require("../../domain/entities/User");

class SequelizeUserRepository extends BaseRepository {
  constructor(model) {
    super();
    this.model = model;
  }

  async create(user) {
    try {
      const [UserCreated, isCreated] = await this.model.findOrCreate({
        where: {
          name: user.name,
          email: user.email,
          is_deleted: false
        },
        defaults: {
          name: user.name,
          password: user.password,
          email: user.email,
          phone: user.phone,
          image_url: user.image_url,
        }
      });
      if(!isCreated) throw new Error("existing user or deleted");
      return new User(UserCreated);
    } catch (error) {
      throw new Error(`Error saving user: ${error.message}`);
    }
  }

  async get(id) {
    try {
      const user = await this.model.findOne({
        where:{
          id:id,
          is_deleted: false
        }
      });
      if (!user)throw new Error(`user ${id} not found`);
      return new User(user);
    } catch (error) {
      throw new Error(`Error getting user by ID: ${error.message}`);
    }
  }

  async update(id, updatedTerapeuta) {
    try {
      const user = await this.model.findOne({
        where:{
          id:id,
          is_deleted:false
        }
      });
      if (!user) throw new Error(`User with id ${id} not found`);

      const updated = await user.update(updatedTerapeuta);

      return new User(updated);
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      const user = await this.model.findByPk(id);
      if (!user) throw new Error(`User with id ${id} not found`);

      const updated = await user.update({
        is_deleted: true,
      });

      return new User(updated);
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}

module.exports = SequelizeUserRepository;
