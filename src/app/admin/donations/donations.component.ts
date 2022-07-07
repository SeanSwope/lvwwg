import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DatabaseHelper } from 'src/app/models/database-result.model';
import { DonationDetail } from 'src/app/models/donation.model';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-admin-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.less'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class AdminDonationsComponent implements OnInit {
  donationDialog = false;
  donations: DonationDetail[] = [];
  donation: DonationDetail = new DonationDetail();
  submitted = false;

  constructor(
    private databaseService: DatabaseService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.loadDonations();
  }

  newDonation() {
    this.donation = new DonationDetail();
    this.submitted = false;
    this.donationDialog = true;
  }

  editDonation(donation: DonationDetail) {
    this.donation = {...donation};
    this.donationDialog = true;
  }

  deleteDonation(donation: DonationDetail) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${donation.organizationName}?`,
      accept: () => {
        this.databaseService.deleteDonation(donation).subscribe(result => {
          if (result.errorCode !== 0) {
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The donation was deleted', life: 3000});
          } else {
            this.loadDonations();
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The donation was deleted', life: 3000});
          }
        })
      }
    });
  }

  hideDialog() {
    this.donationDialog = false;
    this.submitted = false;
  }

  saveDonation() {
    this.submitted = true;

    // Set the date to April so year doesn't change due to timezones.
    this.donation.donationYear.setMonth(4);

    if (this.donation.id === DatabaseHelper.emptyGuid) {
      this.databaseService.createDonation(this.donation).subscribe(result => {
        if (result.errorCode !== 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The donation was created', life: 3000});
        } else {
          this.loadDonations();
          this.messageService.add({severity:'error', summary: 'Failure', detail: 'The donation was not created', life: 3000});
        }
      })
    } else {
      this.databaseService.updateDonation(this.donation).subscribe(result => {
        if (result.errorCode !== 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The donation was updated', life: 3000});
        } else {
          this.loadDonations();
          this.messageService.add({severity:'error', summary: 'Failure', detail: 'The donation was not updated', life: 3000});
        }
      })
    }

    this.loadDonations();
    this.donationDialog = false;
    this.donation = new DonationDetail();
  }

  private loadDonations() {
    this.databaseService.getAllDonations().subscribe(data => {
      this.donations = data
    });
  }

}
