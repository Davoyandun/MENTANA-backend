const { Router } = require("express");
const therapistRouter = require("./TherapistRouter");
const userRouter = require("./UserRouter");
const blogRouter = require("./BlogRouter");

const mainRouter = Router();

mainRouter.use(therapistRouter);
mainRouter.use(userRouter);
mainRouter.use(blogRouter);

module.exports = mainRouter;
