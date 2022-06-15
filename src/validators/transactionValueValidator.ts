import { NextFunction, Request, Response } from "express";
import { Validator } from "../protocols/validators/transactionValidator";

export class TransactionValueValidator implements Validator {
  async isValid(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Error | Response | void> {
    const { value } = req.body;

    if (isNaN(value) || !value)
      return res.status(406).send({ message: "value must be a number" });
    if (value <= 2)
      return res
        .status(406)
        .send({ message: "very low amount for a credit or debit transaction" });
    next();
  }
}
