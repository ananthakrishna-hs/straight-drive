import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationHandlerService {
  private showHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private showCarousel: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private showFaqSection: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private headerStatus: Observable<boolean>;
  private carouselStatus: Observable<boolean>;
  private faqSectionStatus: Observable<boolean>;

  constructor() {
    this.headerStatus = this.showHeader.asObservable();
    this.carouselStatus = this.showCarousel.asObservable();
    this.faqSectionStatus = this.showFaqSection.asObservable();
  }

  getHeaderStatus(): Observable<boolean> {
    return this.headerStatus;
  }

  changeHeaderStatus(state: boolean): void {
    this.showHeader.next(state);
  }

  getCarouselStatus(): Observable<boolean> {
    return this.carouselStatus;
  }

  changeCarouselStatus(state: boolean): void {
    this.showCarousel.next(state);
  }

  getFaqSectionStatus(): Observable<boolean> {
    return this.faqSectionStatus;
  }

  changeFaqSectionStatus(state: boolean): void {
    this.showFaqSection.next(state);
  }

}
