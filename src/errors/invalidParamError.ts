import { ControllerError } from "../protocols/errors/controllerError";

export class InvalidParamError extends Error implements ControllerError {
  constructor(paramName: string, message: string) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
    this.message = message
  }
}