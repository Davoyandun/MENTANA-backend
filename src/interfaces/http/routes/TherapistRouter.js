const express = require("express");
const { Therapist } = require("../../../infrastructure/database/sequelize");
const SequelizeTherapistRepository = require("../../../infrastructure/repositories/SequelizeTherapistRepository");
const TherapistController = require("../../../adapters/controllers/TherapistController");

const therapistRouter = express.Router();

const therapistRepository = new SequelizeTherapistRepository(Therapist);
const therapistController = new TherapistController(therapistRepository);

therapistRouter.post("/therapists", (req, res) =>
  therapistController.create(req, res)
);
therapistRouter.get("/therapists/:id", (req, res) =>
  therapistController.get(req, res)
);
therapistRouter.put("/therapists/:id", (req, res) =>
  therapistController.update(req, res)
);
therapistRouter.delete("/therapists/:id", (req, res) =>
  therapistController.delete(req, res)
);

module.exports = therapistRouter;
