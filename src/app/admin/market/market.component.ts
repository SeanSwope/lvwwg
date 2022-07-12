import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DatabaseHelper } from 'src/app/models/database-result.model';
import { MarketItem } from 'src/app/models/market-item.model';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-admin-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.less'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class AdminMarketComponent implements OnInit {
  marketItemDialog = false;
  marketItems: MarketItem[] = [];
  marketItem: MarketItem = new MarketItem();
  submitted = false;
  selectedImage: File = new File([], '');
  currentPostedDate: Date = new Date();

  constructor(
    private databaseService: DatabaseService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.loadMarketItems();
  }

  newItem() {
    this.marketItem = new MarketItem();
    this.submitted = false;
    this.marketItemDialog = true;
  }

  editItem(marketItem: MarketItem) {
    this.marketItem = {...marketItem};
    this.marketItemDialog = true;
  }

  deleteItem(marketItem: MarketItem) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${marketItem.name}?`,
      accept: () => {
        this.databaseService.deleteMarketItem(marketItem).subscribe(result => {
          if (result.errorCode !== 0) {
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The marketItem was deleted', life: 3000});
          } else {
            this.loadMarketItems();
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The marketItem was deleted', life: 3000});
          }
        })
      }
    });
  }

  hideDialog() {
    this.marketItemDialog = false;
    this.submitted = false;
  }

  saveItem() {
    this.submitted = true;

    this.marketItem.image = this.selectedImage.name;
    this.marketItem.postedDate = new Date(this.currentPostedDate.getFullYear(), this.currentPostedDate.getMonth(),
    this.currentPostedDate.getDate(), this.currentPostedDate.getHours(), this.currentPostedDate.getMinutes());

    if (this.marketItem.id === DatabaseHelper.emptyGuid) {
      this.databaseService.createMarketItem(this.marketItem, this.selectedImage).subscribe(result => {
        if (result.errorCode === 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The market item was created.', life: 3000});
        } else {
          this.messageService.add({severity:'error', summary: 'Failure', detail: result.message, life: 3000});
        }
      })
    } else {
      this.databaseService.updateMarketItem(this.marketItem, this.selectedImage).subscribe(result => {
        if (result.errorCode === 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The market item was updated', life: 3000});
        } else {
          this.messageService.add({severity:'error', summary: 'Failure', detail: result.message, life: 3000});
        }
      })
    }

    this.loadMarketItems();
    this.marketItemDialog = false;
    this.marketItem = new MarketItem();
  }

  onUpload(event: any) {
    console.log(event);
    this.marketItem.image = event.files[0].name;
  }

  onError(event: any) {
    console.log(event);
  }

  private loadMarketItems() {
    this.databaseService.getAllMarketItems().subscribe(data => {
      this.marketItems = data
    });
  }
}
