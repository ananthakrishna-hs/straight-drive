import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from 'src/app/header/header.component';
import { AnimationHandlerService } from 'src/app/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be false by default', () => {
    expect(component.showHeader).toBeFalse();
  });

  it('should dispatch carousel on header animation end', (done: DoneFn) => {
    const animationHandler = new AnimationHandlerService();
    const header = new HeaderComponent(animationHandler);
    header.handleAnimationEnd('animated-header');
    
    animationHandler.getCarouselStatus().subscribe(status => {
      expect(status).toBeTrue();
      done();
    });
  });

  it('shouldnot dispatch carousel on other animation end', (done: DoneFn) => {
    const animationHandler = new AnimationHandlerService();
    const header = new HeaderComponent(animationHandler);
    header.handleAnimationEnd('animated-header-other');
    
    animationHandler.getCarouselStatus().subscribe(status => {
      expect(status).toBeFalse();
      done();
    });
  });

});
