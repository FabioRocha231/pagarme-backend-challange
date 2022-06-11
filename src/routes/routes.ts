import { Request, Response, Router } from "express";
import { TransactionValidator } from "../validators/transactionValidator";


const routes = Router();

routes.post("/transaction", new TransactionValidator().isValid)

export { routes };