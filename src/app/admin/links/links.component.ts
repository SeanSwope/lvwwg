import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DatabaseHelper } from 'src/app/models/database-result.model';
import { LinkDetail } from 'src/app/models/link.model';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-admin-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.less'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class AdminLinksComponent implements OnInit {
  linkDialog = false;
  links: LinkDetail[] = [];
  link: LinkDetail = new LinkDetail();
  submitted = false;
  categories: Array<{id: string, name: string}> = [];

  constructor(
    private databaseService: DatabaseService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadLinks();
  }

  newLink() {
    this.link = new LinkDetail();
    this.submitted = false;
    this.linkDialog = true;
  }

  editLink(link: LinkDetail) {
    this.link = {...link};
    this.linkDialog = true;
  }

  deleteLink(link: LinkDetail) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${link.companyName}?`,
      accept: () => {
        this.databaseService.deleteLink(link).subscribe(result => {
          if (result.errorCode !== 0) {
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The link was deleted', life: 3000});
          } else {
            this.loadLinks();
            this.loadCategories();
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The link was deleted', life: 3000});
          }
        })
      }
    });
  }

  hideDialog() {
    this.linkDialog = false;
    this.submitted = false;
  }

  saveLink() {
    this.submitted = true;

    if (this.link.id === DatabaseHelper.emptyGuid) {
      this.databaseService.createLink(this.link).subscribe(result => {
        if (result.errorCode !== 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The link was created.', life: 3000});
        } else if (result.errorCode > 0) {
          // Item exists
          this.messageService.add({severity:'error', summary: 'Failure', detail: 'The link already exists.', life: 3000});
        } else {
          this.messageService.add({severity:'error', summary: 'Failure', detail: 'The link was not created', life: 3000});
        }
      })
    } else {
      this.databaseService.updateLink(this.link).subscribe(result => {
        if (result.errorCode !== 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The link was updated', life: 3000});
        } else {
          this.messageService.add({severity:'error', summary: 'Failure', detail: 'The link was not updated', life: 3000});
        }
      })
    }

    this.loadCategories();
    this.loadLinks();
    this.linkDialog = false;
    this.link = new LinkDetail();
  }

  private loadLinks() {
    this.databaseService.getAllLinks().subscribe(data => {
      this.links = data
    });
  }

  private loadCategories() {
    this.databaseService.getAllCategories().subscribe(data => {
      this.categories = data
    });
  }
}
