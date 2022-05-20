import { Component, OnInit } from '@angular/core';
import { ImageDetails } from '../models/image.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {
  images: Array<ImageDetails> = [];
  responsiveOptions: Array<{breakpoint: string, numVisible: number, numScroll: number}> = [];

  constructor(
    private databaseService: DatabaseService,
  ) {
    this.responsiveOptions = [
      // {
      //     breakpoint: '1024px',
      //     numVisible: 3,
      //     numScroll: 3
      // },
      // {
      //     breakpoint: '768px',
      //     numVisible: 2,
      //     numScroll: 2
      // },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.databaseService.getImages().subscribe(images => {
      this.images = images!;
    });
  }

}
