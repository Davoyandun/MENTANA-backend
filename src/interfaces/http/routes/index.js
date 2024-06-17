const { Router } = require("express");
const therapistRouter = require("./TherapistRouter");
const blogRouter = require("./BlogRouter");

const mainRouter = Router();

mainRouter.use(therapistRouter);
mainRouter.use(blogRouter);

module.exports = mainRouter;
