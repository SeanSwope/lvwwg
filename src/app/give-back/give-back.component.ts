import { Component, OnInit } from '@angular/core';
import { DonationDetails } from '../models/donation.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-give-back',
  templateUrl: './give-back.component.html',
  styleUrls: ['./give-back.component.less']
})
export class GiveBackComponent implements OnInit {
  donationInfo: Array<DonationDetails> = [];
  columns: Array<{field: string, header: string}> = [
    { field: 'organization', header: 'Organization' },
    { field: 'blockSets', header: 'Block Sets' },
    { field: 'racecars', header: 'Racecars' },
    { field: 'rockingHorses', header: 'Rocking Horses' },
    { field: 'trains', header: 'Trains' },
    { field: 'wands', header: 'Wands' },
    { field: 'misc', header: 'Miscellaneous' },
  ];

  constructor(
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.databaseService.getDonations().subscribe(donations => {
      this.donationInfo = donations!;
    });
  }

}
