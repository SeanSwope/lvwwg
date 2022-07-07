import { DatabaseHelper, DatabaseResult } from "./database-result.model";

export class Member extends DatabaseResult {
  id: string;
  firstName: string;
  lastName: string
  email: string;
  password: string;
  admin: boolean;

  constructor() {
    super();
    this.id = DatabaseHelper.emptyGuid;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.admin = false;
  }
}
