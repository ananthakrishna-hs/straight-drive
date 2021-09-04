import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from 'src/app/layout/header/header.component';

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

  it('should dispatch event on animation end of header', () => {
    spyOn(component.animationEndEvent, 'emit');
    component.handleAnimationEnd(component.id);
    expect(component.animationEndEvent.emit).toHaveBeenCalled();
  });

  it('should not dispatch event on animation end of header children', () => {
    spyOn(component.animationEndEvent, 'emit');
    component.handleAnimationEnd('other-element');
    expect(component.animationEndEvent.emit).not.toHaveBeenCalled();
  });

});
