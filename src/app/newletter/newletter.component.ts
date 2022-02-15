import { Component, OnInit } from '@angular/core';
import { SelectItem, SelectItemGroup } from 'primeng/api';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-newletter',
  templateUrl: './newletter.component.html',
  styleUrls: ['./newletter.component.less']
})
export class NewsletterComponent implements OnInit {
  newsletterOptions: Array<SelectItemGroup> = [];
  selectedNewsletter = '';
  showFile = false;

  constructor(
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.databaseService.getNewsletters().subscribe(news => {
      this.newsletterOptions = news;
    })
  }

  onView() {
    this.showFile = true;
  }
}
