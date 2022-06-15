import { Request, Response, Router } from "express";
import { ValidateCardNumber } from "../validators/CardValidator";
import { TransactionValidator } from "../validators/cardOwnerValidator";
import { TransactionValueValidator } from "../validators/transactionValueValidator";

const routes = Router();
routes.post(
  "/transaction",
  new ValidateCardNumber().validate,
  new TransactionValueValidator().isValid,
  new TransactionValidator().isValid
);

export { routes };
