import { NextFunction, Request, Response } from "express";
import { Validator } from "../protocols/validators/transactionValidator";

export class CvvValidator implements Validator {
  async isValid(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Error | Response | void> {
    const { cvv } = req.body;

    if (!cvv || isNaN(cvv))
      return res
        .status(406)
        .send({ message: "cvv required to confirm you transaction" });

    next();
  }
}
