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

  constructor(
    private databaseService: DatabaseService,
  ) { }

  ngOnInit(): void {
    this.databaseService.getImages().subscribe(images => {
      this.images = images!;
    });
  }

}
