const { Router } = require("express");
const therapistRouter = require("./TherapistRouter");
const blogRouter = require("./BlogRouter");
const paymentRouter = require("./PaymentRouter");

const mainRouter = Router();

mainRouter.use(therapistRouter);
mainRouter.use(blogRouter);
mainRouter.use(paymentRouter);

module.exports = mainRouter;
