export class DatabaseResult {
  errorCode = 0;
  message = '';

  constructor() {
    this.errorCode = 0;
    this.message = '';
  }
}

export enum ErrorCodes {
  noError = 0,
  duplicate,
  missingParameter,
}

export class DatabaseHelper {
  static emptyGuid: string = 'EMPTY-ID';
}
