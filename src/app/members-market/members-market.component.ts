import { Component, OnInit } from '@angular/core';
import { MarketItem } from '../models/market-item.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-members-martke',
  templateUrl: './members-market.component.html',
  styleUrls: ['./members-market.component.less']
})
export class MembersMarketComponent implements OnInit {
  martItems: Array<MarketItem> = [];
  columns: Array<{field: string, header: string}> = [
    { field: 'dateTime', header: 'Date' },
    { field: 'dateTime', header: 'Time' },
    { field: 'subject', header: 'Subject' },
    { field: 'presenter', header: 'Presenter' },
  ];

  constructor(
    private databaseService: DatabaseService,
  ) {
  }

  ngOnInit(): void {
    this.databaseService.getAllMarketItems().subscribe(items => {
      this.martItems = items;
    });
  }
}
