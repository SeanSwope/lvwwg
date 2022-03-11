import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.less']
})
export class ShowcaseComponent implements OnInit {
  showcaseItems: Array<{name: string, source: string}> = [];

  constructor() {
    this.showcaseItems.push({name: 'Wood Trays', source: '../../assets/showcase/christmas-bell.JPEG'});
    this.showcaseItems.push({name: 'Wood Trays', source: '../../assets/showcase/wood-trays.JPG'});
  }

  ngOnInit(): void {
  }

}
