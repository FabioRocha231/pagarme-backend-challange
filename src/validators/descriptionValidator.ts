import { NextFunction, Request, Response } from "express";
import { Validator } from "../protocols/validators/transactionValidator";

export class DescriptionValidator implements Validator {
  async isValid(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Error | Response | void> {
    const { description } = req.body;

    if (!description)
      return res
        .status(406)
        .send({ message: "the description is necessary to identify your transactions" });

    next();
  }
}
