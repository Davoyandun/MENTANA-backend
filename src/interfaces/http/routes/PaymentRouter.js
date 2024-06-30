const express = require("express");
const PaymentController = require("../../../adapters/controllers/PaymentController");
const paymentRouter = express.Router();

//payments seria el modelo payments de la base de datos
const payments = {};

const paymentController = new PaymentController(payments);
paymentRouter.post("/payment", (req, res) => {
  paymentController.getPaymentUrl(req, res);
});

module.exports = paymentRouter;