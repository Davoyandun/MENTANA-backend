class BaseRepository {
  async create() {
    throw new Error("Not implemented");
  }

  async getById() {
    throw new Error("Not implemented");
  }

  async update() {
    throw new Error("Not implemented");
  }

  async delete() {
    throw new Error("Not implemented");
  }

  // Otros métodos necesarios...
}

module.exports = BaseRepository;
