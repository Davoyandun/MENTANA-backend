const express = require("express");
const { Therapist } = require("../../../infrastructure/database/sequelize");
const SequelizeTherapistRepository = require("../../../infrastructure/repositories/SequelizeTherapistRepository");
const TherapistController = require("../../../adapters/controllers/TherapistController");

const therapistRouter = express.Router();

const therapistRepository = new SequelizeTherapistRepository(Therapist);
const appointmentController = new TherapistController(therapistRepository);

therapistRouter.post("/therapists", (req, res) =>
  appointmentController.create(req, res)
);
therapistRouter.get("/therapists/:id", (req, res) =>
  appointmentController.get(req, res)
);
therapistRouter.put("/therapists/:id", (req, res) =>
  appointmentController.update(req, res)
);
therapistRouter.delete("/therapists/:id", (req, res) =>
  appointmentController.delete(req, res)
);

module.exports = therapistRouter;
