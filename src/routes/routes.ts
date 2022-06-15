import { Router } from "express";
import { ValidateCardNumber } from "../validators/CardValidator";
import { TransactionValidator } from "../validators/cardOwnerValidator";
import { TransactionValueValidator } from "../validators/transactionValueValidator";
import { PayMethodValidator } from "../validators/payMethodValidator";
import { CvvValidator } from "../validators/cvvValidator";
import { CardValidityValidator } from "../validators/cardValidityValidator";

const routes = Router();
routes.post(
  "/transaction",
  new PayMethodValidator().isValid,
  new ValidateCardNumber().validate, 
  new CardValidityValidator().isValid,
  new CvvValidator().isValid,
  new TransactionValueValidator().isValid,
  new TransactionValidator().isValid
);

export { routes };
