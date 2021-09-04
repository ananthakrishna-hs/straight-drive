import { Component } from '@angular/core';

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

  constructor() {
  }
}
