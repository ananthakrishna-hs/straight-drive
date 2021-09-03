import { AfterViewInit, Component } from '@angular/core';

import { AnimationHandlerService } from 'src/app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  id = 'animated-header';
  showHeader = false;
  constructor(
    private animationHandler: AnimationHandlerService
  ) {
    this.animationHandler.getHeaderStatus().subscribe(status => this.showHeader = status);
  }

  handleAnimationEnd(targetId: string): void {
    if (targetId === this.id) {
      this.animationHandler.changeCarouselStatus(true);
    }
  }

  ngAfterViewInit(): void {
    const id = 'animated-header';
    document.getElementById('animated-header')?.addEventListener('animationend', (event) => this.handleAnimationEnd((<HTMLInputElement>event.target).id));
  }

}
