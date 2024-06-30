

const GetPaymentUrlUseCase = require("../../usecases/payments/GetPaymentUrlUseCase");

class PaymentController {
  constructor(paymentRepository) {
    this.getPaymentUrlUseCase = new GetPaymentUrlUseCase(paymentRepository);
  }
    
  async getPaymentUrl(req, res) {
    const paymentInfo = req.body;
    try {
      const paymentUrl = await this.getPaymentUrlUseCase.execute(paymentInfo);
      res.status(200).json(paymentUrl);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = PaymentController;