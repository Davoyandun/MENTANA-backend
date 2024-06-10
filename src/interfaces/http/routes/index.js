const { Router } = require("express");
const therapistRouter = require("./TherapistRouter");

const mainRouter = Router();

mainRouter.use(therapistRouter);

module.exports = mainRouter;
