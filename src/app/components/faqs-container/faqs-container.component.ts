import { Component, Input, QueryList, ViewChildren } from '@angular/core';

import { FaqItems } from 'src/app/core';
import { FaqItemComponent } from 'src/app/components/faqs-container/faq-item/faq-item.component';

@Component({
  selector: 'app-faqs-container',
  templateUrl: './faqs-container.component.html',
  styleUrls: ['./faqs-container.component.scss']
})
export class FaqsContainerComponent {
  open: number = -1;

  @Input()
  faqItems: FaqItems = [];

  @ViewChildren(FaqItemComponent)
  listItems?: QueryList<FaqItemComponent>;
  constructor() {
  }

  handleToggle(id: number): void {
    if (!this.listItems?.length) {
      return;
    }
    const items = this.listItems?.toArray();
    if (items) {
      if (this.open === -1) {
        this.open = id;
        return;
      }
  
      if (this.open === id) {
        this.open = -1;
        return;
      }
      items[this.open].showAnswer = false;
      this.open = id;
    }

  }

}
