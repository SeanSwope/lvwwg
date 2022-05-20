import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DatabaseService, Product } from '../../services/database.service';
import { MeetingDetails } from 'src/app/models/meeting-info.model';
import { DatabaseHelper } from 'src/app/models/database-result.model';

@Component({
  selector: 'app-admin-meetings',
  templateUrl: './meetings.component.html',
  styles: [],
  styleUrls: ['./meetings.component.less'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class AdminMeetingsComponent implements OnInit {
  meetingDialog = false;
  meetings: MeetingDetails[] = [];
  meeting: MeetingDetails = new MeetingDetails();
  selectedMeetings: MeetingDetails[] = [];
  submitted = false;
  currentMeetingDate: Date = new Date();
  currentMeetingTime: Date = new Date();

  constructor(
    private databaseService: DatabaseService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.loadMeetings();
  }

  newMeeting() {
    this.meeting = new MeetingDetails();
    this.currentMeetingDate = this.meeting.dateTime;
    this.currentMeetingTime = this.meeting.dateTime;
    this.submitted = false;
    this.meetingDialog = true;
  }

  editMeeting(meeting: MeetingDetails) {
    this.meeting = {...meeting};
    this.currentMeetingDate = this.meeting.dateTime;
    this.currentMeetingTime = this.meeting.dateTime;
    this.meetingDialog = true;
  }

  deleteMeeting(meeting: MeetingDetails) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the ' + meeting.dateTime.toDateString() + ' meeting?',
      accept: () => {
        this.databaseService.deleteMeeting(meeting).subscribe(result => {
          if (result.errorCode !== 0) {
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The meeting was deleted', life: 3000});
          } else {
            this.loadMeetings();
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The meeting was deleted', life: 3000});
          }
        })
      }
    });
  }

  hideDialog() {
    this.meetingDialog = false;
    this.submitted = false;
  }

  saveMeeting() {
    this.submitted = true;

    // Copy date/time parts back to meeting date
    this.meeting.dateTime = new Date(this.currentMeetingDate.getFullYear(), this.currentMeetingDate.getMonth(),
      this.currentMeetingDate.getDate(), this.currentMeetingTime.getHours(), this.currentMeetingTime.getMinutes());
//    this.meeting.dateTime.setDate(this.currentMeetingDate.getDate());
    if (this.meeting.id === DatabaseHelper.emptyGuid) {
      this.databaseService.createMeeting(this.meeting).subscribe(result => {
        if (result.errorCode !== 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The meeting was created', life: 3000});
        } else {
          this.loadMeetings();
          this.messageService.add({severity:'error', summary: 'Failure', detail: 'The meeting was not created', life: 3000});
        }
      })
    } else {
      this.databaseService.updateMeeting(this.meeting).subscribe(result => {
        if (result.errorCode !== 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The meeting was updated', life: 3000});
        } else {
          this.loadMeetings();
          this.messageService.add({severity:'error', summary: 'Failure', detail: 'The meeting was not updated', life: 3000});
        }
      })
    }

    this.loadMeetings();
    this.meetingDialog = false;
    this.meeting = new MeetingDetails();
  }

  private loadMeetings() {
    this.databaseService.getAllMeetings().subscribe(data => {
      this.meetings = data
    });
  }
}
