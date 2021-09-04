import { Component, OnInit } from '@angular/core';

import { GalleryImageItems } from 'src/app/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: GalleryImageItems = [];
  constructor() {
  }

  ngOnInit(): void {
    this.images.push(
      { path: 'assets/images/stride.jpg' },
      { path: 'assets/images/wicket.jpg' },
      { path: 'assets/images/cover.jpg' },
      { path: 'assets/images/cut.jpg' },
      { path: 'assets/images/pull.jpg' }
    );
  }

}
