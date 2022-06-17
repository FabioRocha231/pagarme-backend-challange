import { Request, Response } from "express";
import { ErrorHandler } from "../errors/errorHandler";
import { UserController } from "./userController";

export class TransactionController {
  async debitOrCredit(req: Request, res: Response) {
    const { errorHandler } = new ErrorHandler();
    const { value, description, payMethod, cardOwner, cvv, cardValidation } =
      req.body;
    let status;
    if (payMethod === "debit_card") {
      status = "paid";
      const [error, result] = await errorHandler(
        new UserController().create({
          name: cardOwner
        })
      );
      if (error) res.status(500).send(error.message);
      return res.status(201).send(result);
    }

    if (payMethod === "credit_card") {
      status = "waiting_funds";
      const [error, result] = await errorHandler(
        new UserController().create({
          name: cardOwner
        })
      );
      if (error) res.status(500).send(error.message);
      return res.status(201).send(result);
    }
  }
}
