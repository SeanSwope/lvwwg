export class MeetingDetails {
  dateTime: Date;
  location: string;
  presenter: string;
  topic: string;

  constructor() {
    this.dateTime = new Date();
    this.location = '';
    this.presenter = '';
    this.topic = '';
  }
}
