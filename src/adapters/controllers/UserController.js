const CreateUserUseCase = require("../../application/use-cases/user/CreateUserUseCase");
const GetUserUseCase = require("../../application/use-cases/user/GetUserUseCase");
const UpdateUserUseCase = require("../../application/use-cases/user/UpdateUserUseCase");
const DeleteUserUseCase = require("../../application/use-cases/user/DeleteUserUseCase");


class UserController {
  constructor(userRepository) {
    this.createUserUseCase = new CreateUserUseCase(
      userRepository
    );
    this.getUserUseCase = new GetUserUseCase(
      userRepository
    );
    this.updateUserUseCase = new UpdateUserUseCase(
      userRepository
    );
    this.deleteUserUseCase = new DeleteUserUseCase(
      userRepository
    );
  }

  async create(req, res) {
    try {
      const userData = req.body;
      const newUser = await this.createUserUseCase.execute(
        userData
      );
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async get(req, res) {
    try {
      const id = req.params.id;
      const user = await this.getUserUseCase.execute(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const updateUser = await this.updateUserUseCase.execute(
        id,
        updatedData
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      await this.deleteUserUseCase.execute(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = UserController;