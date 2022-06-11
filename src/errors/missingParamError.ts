import { ControllerError } from "../protocols/errors/controllerError";

export class MissingParamError extends Error implements ControllerError {
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}