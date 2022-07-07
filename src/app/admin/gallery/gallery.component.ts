import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DatabaseHelper } from 'src/app/models/database-result.model';
import { ImageDetail } from 'src/app/models/image.model';
import { DatabaseService } from '../../services/database.service';
import { FileUpload } from 'primeng/fileupload';


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
  uploadedFiles: any[] = [];
  //@ViewChild('fileInput') fileInput: FileUpload;
  attachments = [];
  selectedImage: File = new File([], '');

  constructor(
    private databaseService: DatabaseService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.loadImages();
  }

  // onSubmit(): void {
  //   const promiseList = [];
  //   const ObservableList = [];
  //   this.fileInput.files.forEach(file => {
  //     promiseList.push(file);
  //   });
  // }

/*   downloadFile(attachments: any[], i: number) {

  }

  deleteFile(attachments, i) {

  }

  isImage(file) {
    return true;
  }
 */
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


/* import { FileUpload } from 'primeng/fileupload';
import { forkJoin } from 'rxjs/observable/forkJoin';

@ViewChild('fileInput') fileInput: FileUpload;

//onSubmit upload file
onSubmit(): void {
  const promiseList = [];
  const ObservableList = [];
  this.fileInput.files.forEach(file => {
    promiseList.push(this.uploadService.uploadFile(file));
  });

  //call delete function here in case of delete
  //this.uploadService.deleteAttachment(this.deletedattachments);
  if (promiseList.length) {
    forkJoin(promiseList).subscribe(files => {
      const date = new Date();
      files.forEach(file => {
        this.attachments.push({
          originalname: file['originalname'],
          uploadname: file['uploadname'],
          uploadtime: date.getDate()
        });
      });
      //Do form save here after uploading
    },
    err => {
      console.log(err);
    });
  }
}

//Maintain delete list
deleteFile(list, index) {
  this.deletedattachments.push(this.attachments[index]);
  this.attachments.splice(index, 1);
}
 */
