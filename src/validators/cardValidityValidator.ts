import { NextFunction, Request, Response } from "express";
import { Validator } from "../protocols/validators/transactionValidator";

export class CardValidityValidator implements Validator {
  async isValid(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Error | Response | void> {
    let today;
    const { cardValidity } = req.body;
    if (!cardValidity)
      return res.status(406).send({ message: "expiration date is required" });
    today = new Date();
    const date = [...cardValidity.split("/")];
    const month = +date[0];
    const year = +date[1];
    const expiryDate = new Date(year, month);

    // console.log(someday)
    if (expiryDate < today)
      return res.status(406).send({
        message:
          "The expiry date is before today's date. Please select a valid expiry date",
      });

    next();
  }
}
