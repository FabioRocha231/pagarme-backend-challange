export class ErrorHandler {
  errorHandler = (promise: Promise<unknown>) =>
    promise.then((result) => [null, result]).catch((error) => [error]);
}
