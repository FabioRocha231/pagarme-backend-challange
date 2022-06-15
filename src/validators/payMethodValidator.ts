import { NextFunction, Request, Response } from "express";
import { Validator } from "../protocols/validators/transactionValidator";

export class PayMethodValidator implements Validator {
  async isValid(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Error | Response | void> {
    const { payMethod } = req.body;
    if (!(payMethod === "debit_card" || payMethod === "credit_card"))
      return res.status(405).send({ message: "pay method not allowed" });
    
    next();
  }
}
