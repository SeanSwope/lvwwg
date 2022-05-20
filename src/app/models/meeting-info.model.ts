import { DatabaseHelper, DatabaseResult } from "./database-result.model";

export class MeetingDetails extends DatabaseResult {
  id: string;
  dateTime: Date;
  location: string;
  presenter: string;
  topic: string;

  constructor() {
    super();
    this.id = DatabaseHelper.emptyGuid;
    this.dateTime = new Date();
    this.location = 'Woodcraft Store';
    this.presenter = '';
    this.topic = '';
  }
}
