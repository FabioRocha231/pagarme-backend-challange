import { Request, Response, Router } from "express";
import { ValidateCardNumber } from "../validators/CardValidator";
import { TransactionValidator } from "../validators/transactionValidator";

const routes = Router();
// new TransactionValidator().isValid
routes.post(
  "/transaction",
  new ValidateCardNumber().validate,
  new TransactionValidator().isValid
);

export { routes };
