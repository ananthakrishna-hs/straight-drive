import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { FaqItem } from 'src/app/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss'],
  animations: [
    trigger(
      'appearAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate(
              '1s ease-out', style({ opacity: 1 })
            )
          ]
        ),
      ]
    ),
    trigger(
      'disappearAnimation',
      [
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate(
              '0.5s ease-out', style({ opacity: 0 })
            )
          ]
        ),
      ]
    )
  ]
})
export class FaqItemComponent {
  @Input()
  faqItemContent?: FaqItem;

  @Input()
  id?: number;

  @Output()
  answerToggleEvent: EventEmitter<number>;

  showAnswer = false;

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  constructor() {
    this.answerToggleEvent = new EventEmitter<number>();
  }

  toggleAnswer(): void {
    this.showAnswer = !this.showAnswer;
    this.answerToggleEvent.emit(this.id);
  }

}
