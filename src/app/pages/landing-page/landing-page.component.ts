import { Component } from '@angular/core';

import { FaqItems } from 'src/app/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  faqs: FaqItems = [];
  constructor() {
    this.faqs = [
      { question: 'What is Straight Drive?', answer: 'Straight Drive is a one stop destination for all budding cricket players. You get access to coaching content, drills, discounts on kits, etc.' },
      { question: 'How do I join?', answer: 'Register here with us and you will get instructions on how to avail access through email.' },
      { question: 'Do you have refund policy?', answer: 'Yes, you can avail refund within 7 days of purchase, no questions asked' }
    ];
  }

}
