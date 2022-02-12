import { Component, OnInit } from '@angular/core';
import { MeetingDetails } from '../models/meeting-info.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.less']
})
export class MeetingsComponent implements OnInit {
  meetingsInfo: Array<MeetingDetails> = [];
  columns: Array<{field: string, header: string}> = [
    { field: 'dateTime', header: 'Date' },
    { field: 'dateTime', header: 'Time' },
    { field: 'subject', header: 'Subject' },
    { field: 'presenter', header: 'Presenter' },
    // { field: 'location', header: 'Location' }
  ];

  constructor(
    private databaseService: DatabaseService,
  ) {
  }

  ngOnInit(): void {
    this.databaseService.getMeetings().subscribe(meetings => {
      this.meetingsInfo = meetings!;
    });
  }
}
