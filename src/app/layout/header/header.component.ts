import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  id = 'animated-header';

  @Output()
  animationEndEvent: EventEmitter<boolean>;
  constructor() {
    this.animationEndEvent = new EventEmitter<boolean>();
  }

  /**
   * To handle animationend of header element.
   * @param {string} targetId ID of HTMLElement which triggered animationend
   */
  handleAnimationEnd(targetId: string): void {
    if (targetId === this.id) {
      this.animationEndEvent.emit(true);
    }
  }

  ngAfterViewInit(): void {
    document.getElementById('animated-header')?.addEventListener('animationend', (event) => this.handleAnimationEnd((<HTMLInputElement>event.target).id));
  }

}
