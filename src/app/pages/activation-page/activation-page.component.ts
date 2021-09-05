import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { FaqItems } from 'src/app/core';

@Component({
  selector: 'app-activation-page',
  templateUrl: './activation-page.component.html',
  styleUrls: ['./activation-page.component.scss']
})
export class ActivationPageComponent implements OnInit {
  @ViewChild('successCanvas', { static: true })
  canvasRef?: ElementRef;

  canvasContext: CanvasRenderingContext2D;
  faqs: FaqItems = [];

  constructor() {
    this.canvasContext = this.canvasRef?.nativeElement.getContext('2d');
    this.faqs = [
      { question: 'What is Straight Drive?', answer: 'Straight Drive is a one stop destination for all budding cricket players. You get access to coaching content, drills, discounts on kits, etc.' },
      { question: 'How do I join?', answer: 'Register here with us and you will get instructions on how to avail access through email.' },
      { question: 'Do you have refund policy?', answer: 'Yes, you can avail refund within 7 days of purchase, no questions asked' }
    ];
  }

  ngOnInit(): void {
    // To render success animation on activation.
    this.canvasContext = this.canvasRef?.nativeElement.getContext('2d');

    this.canvasContext.lineWidth = 5;
    this.canvasContext.strokeStyle = 'rgb(153, 187, 255)';

    let start = 50;
    let leftX = start;
    let leftY = start;
    let mid = 70;
    let end = 120;

    let rightX = mid - (5 / 2.7);
    let rightY = mid + (5 / 2.7);

    // The path starting part of tick mark.
    for (let i = start; i < mid; i++) {
      setTimeout(() => {
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(50, 50);
        this.canvasContext.lineTo(leftX, leftY);
        this.canvasContext.stroke();
        leftX++;
        leftY++;
      }, 1 + (i * 20) / 3);
    }

    // The path from middle to ending part of tick mark.
    for (let i = mid; i < end; i++) {
      setTimeout(() => {
        this.canvasContext.beginPath();
        this.canvasContext.moveTo(leftX, leftY);
        this.canvasContext.lineTo(rightX, rightY);
        this.canvasContext.stroke();
        rightX++;
        rightY--;
      }, 1 + (i * 20) / 3);
    }
  }

}
