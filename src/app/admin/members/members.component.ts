import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DatabaseService, Product } from '../../services/database.service';
import { DatabaseHelper } from 'src/app/models/database-result.model';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-admin-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.less'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class AdminMembersComponent implements OnInit {
  memberDialog = false;
  members: Member[] = [];
  member: Member = new Member();
  selectedMembers: Member[] = [];
  submitted = false;

  constructor(
    private databaseService: DatabaseService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  newMember() {
    this.member = new Member();
    this.submitted = false;
    this.memberDialog = true;
  }

  editMember(member: Member) {
    this.member = {...member};
    this.memberDialog = true;
  }

  deleteMember(member: Member) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete the member ${member.firstName} ${member.lastName}?`,
      accept: () => {
        this.databaseService.deleteMember(member).subscribe(result => {
          if (result.errorCode !== 0) {
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The member was deleted', life: 3000});
          } else {
            this.loadMembers();
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The member was deleted', life: 3000});
          }
        })
      }
    });
  }

  hideDialog() {
    this.memberDialog = false;
    this.submitted = false;
  }

  saveMember() {
    this.submitted = true;

    if (this.member.id === DatabaseHelper.emptyGuid) {
      this.databaseService.createMember(this.member).subscribe(result => {
        if (result.errorCode !== 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The member was created', life: 3000});
        } else {
          this.loadMembers();
          this.messageService.add({severity:'error', summary: 'Failure', detail: 'The member was not created', life: 3000});
        }
      })
    } else {
      this.databaseService.updateMember(this.member).subscribe(result => {
        if (result.errorCode !== 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The member was updated', life: 3000});
        } else {
          this.loadMembers();
          this.messageService.add({severity:'error', summary: 'Failure', detail: 'The member was not updated', life: 3000});
        }
      })
    }

    this.loadMembers();
    this.memberDialog = false;
    this.member = new Member();
  }

  private loadMembers() {
    this.databaseService.getAllMembers().subscribe(data => {
      this.members = data
    });
  }
}
