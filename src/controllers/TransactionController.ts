import { Request, Response } from "express";

export class TransactionController {
  debitOrCredit(req: Request, res: Response) {
    const { value, description, payMethod, cardOwner, cvv, cardValidation } =
      req.body;
    let status;
    if (payMethod === "debit_card") {
      status = "paid";
      return res.status(200).send({
        cardOwner,
        value,
        payMethod,
        cardValidation,
        cvv,
        description,
        status,
      });
    }

    if (payMethod === "credit_card") {
      status = "waiting_funds"
      return res.status(200).send({
        cardOwner,
        value,
        payMethod,
        cardValidation,
        cvv,
        description,
        status
      });
    }
  }
}
