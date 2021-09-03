import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { FaqItemComponent } from './faq-item.component';

describe('FaqItemComponent', () => {
  let component: FaqItemComponent;
  let fixture: ComponentFixture<FaqItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqItemComponent ],
      imports: [BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch event on toggle', () => {
    spyOn(component.answerToggleEvent, 'emit');
    component.toggleAnswer();
    expect(component.answerToggleEvent.emit).toHaveBeenCalled();
  });
});
