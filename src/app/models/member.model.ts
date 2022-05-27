import { DatabaseHelper } from "./database-result.model";

export class Member {
  id: string;
  firstName: string;
  lastName: string
  email: string;
  password: string;
  admin: boolean;

  constructor() {
    this.id = DatabaseHelper.emptyGuid;
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = '';
    this.admin = false;
  }
}
