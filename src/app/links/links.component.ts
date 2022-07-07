import { Component, OnInit } from '@angular/core';
import { CategoryLinkDetails, LinkDetail } from '../models/link.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.less']
})
export class LinksComponent implements OnInit {
  links: Array<CategoryLinkDetails> = [];

  constructor(
    private databaseService: DatabaseService,
  ) {
  }

  ngOnInit(): void {
/*    this.databaseService.getLinks().subscribe(links => {
      this.links = links!;
    }); */
  }
}
