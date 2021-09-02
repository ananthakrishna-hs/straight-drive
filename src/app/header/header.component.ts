import { AfterViewInit, Component } from '@angular/core';

import { AnimationHandlerService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  showHeader = false;
  constructor(
    private animationHandler: AnimationHandlerService
  ) {
    this.animationHandler.getHeaderStatus().subscribe(status => this.showHeader = status);
  }

  ngAfterViewInit(): void {
    const id = 'animated-header';
    document.getElementById('animated-header')?.addEventListener('animationend', (event) => {
      if (event.target && (<HTMLInputElement>event.target).id === id) {
        this.animationHandler.changeCarouselStatus(true);
      }
    });
  }

}
