import { Component } from '@angular/core';

import { AnimationHandlerService } from 'src/app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'straight-drive';
  showPage = false;

  togglePage(status: boolean): void {
    this.showPage = status;
  }

  constructor(
    private animationHandler: AnimationHandlerService
  ) {
    this.animationHandler.changeHeaderStatus(true);
  }
}
