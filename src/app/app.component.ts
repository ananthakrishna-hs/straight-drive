import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'straight-drive';
  showPage = false;

  /**
   * To change visibility of content and footer.
   * @param {boolean} status Status of page to be updated
   */
  togglePage(status: boolean): void {
    this.showPage = status;
  }

  constructor() {
  }
}
