import { NextFunction, Request, Response } from "express";
import { InvalidParamError } from "../errors";
import { Validator } from "../protocols/validators/transactionValidator";

export class TransactionValidator implements Validator {
  async isValid(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Error | Response | void> {
    const { cardOwner } = req.body;
    if (!TransactionValidator.validateCardOwner(cardOwner)) {
      return TransactionValidator.validateOwnerError(
        406,
        "cardOwner",
        "cardOwner must be between 2 to 255 characters",
        res
      );
    }
    next();
  }

  static validateCardOwner(name: string): boolean {
    if (!name || name.trim().length < 2 || name.trim().length > 255)
      return false;
    return true;
  }

  static validateOwnerError(
    status: number,
    errorName: string,
    message: string,
    res: Response
  ): Response {
    return res.status(status).send(new InvalidParamError(errorName, message));
  }
}
