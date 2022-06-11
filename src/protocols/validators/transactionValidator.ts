import { NextFunction, Request, Response } from "express";

export interface Validator {
  isValid(req: Request, res: Response, next: NextFunction): Promise<Error | Response >
}