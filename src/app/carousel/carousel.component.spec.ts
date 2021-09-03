import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from 'src/app/carousel/carousel.component';
import { AnimationHandlerService } from 'src/app/core';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be false by default', () => {
    expect(component.showCarousel).toBeFalse();
  });

  it('should show carousel when triggered', () => {
    const animationHandler = new AnimationHandlerService();
    const carousel = new CarouselComponent(animationHandler);
    animationHandler.changeCarouselStatus(true);

    expect(carousel.showCarousel).toBeTrue();
  });
});
