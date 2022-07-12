import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DatabaseHelper } from 'src/app/models/database-result.model';
import { ImageDetail } from 'src/app/models/image.model';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less'],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class AdminGalleryComponent implements OnInit {
  imageDialog = false;
  images: ImageDetail[] = [];
  image: ImageDetail = new ImageDetail();
  submitted = false;
  selectedImage: File = new File([], '');

  constructor(
    private databaseService: DatabaseService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.loadImages();
  }

  newImage() {
    this.image = new ImageDetail();
    this.submitted = false;
    this.imageDialog = true;
  }

  editImage(image: ImageDetail) {
    this.image = {...image};
    this.imageDialog = true;
  }

  deleteImage(image: ImageDetail) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${image.title}?`,
      accept: () => {
        this.databaseService.deleteImage(image).subscribe(result => {
          if (result.errorCode !== 0) {
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The image was deleted', life: 3000});
          } else {
            this.loadImages();
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'The image was deleted', life: 3000});
          }
        })
      }
    });
  }

  hideDialog() {
    this.imageDialog = false;
    this.submitted = false;
  }

  saveImage() {
    this.submitted = true;

    this.image.imageSource = this.selectedImage.name;
    if (this.image.id === DatabaseHelper.emptyGuid) {
      this.databaseService.createImage(this.image, this.selectedImage).subscribe(result => {
        if (result.errorCode === 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The image was created.', life: 3000});
        } else {
          this.messageService.add({severity:'error', summary: 'Failure', detail: result.message, life: 3000});
        }
      })
    } else {
      this.databaseService.updateImage(this.image, this.selectedImage).subscribe(result => {
        if (result.errorCode === 0) {
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'The image was updated', life: 3000});
        } else {
          this.messageService.add({severity:'error', summary: 'Failure', detail: result.message, life: 3000});
        }
      })
    }

    this.loadImages();
    this.imageDialog = false;
    this.image = new ImageDetail();
  }

  onUpload(event: any) {
    console.log(event);
    this.image.imageSource = event.files[0].name;
  }

  onError(event: any) {
    console.log(event);
  }

  private loadImages() {
    this.databaseService.getAllImages().subscribe(data => {
      this.images = data
    });
  }
}
