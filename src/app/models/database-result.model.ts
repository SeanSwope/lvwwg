export class DatabaseResult {
  errorCode = 0;
  message = '';

  constructor() {
    this.errorCode = 0;
    this.message = '';
  }
}

export class DatabaseHelper {
  static emptyGuid: string = 'EMPTY-ID';
}
