const express = require("express");
const { User } = require("../../../infrastructure/database/sequelize");
const SequelizeUserRepository = require("../../../infrastructure/repositories/SequelizeUserRepository");
const UserController = require("../../../adapters/controllers/UserController");

const userRouter = express.Router();

const userRepository = new SequelizeUserRepository(User);
const userController = new UserController(userRepository);

userRouter.post("/users", (req, res) =>
  userController.create(req, res)
);
userRouter.get("/users/:id", (req, res) =>
  userController.get(req, res)
);
userRouter.put("/users/:id", (req, res) =>
  userController.update(req, res)
);
userRouter.delete("/users/:id", (req, res) =>
  userController.delete(req, res)
);

module.exports = userRouter;
