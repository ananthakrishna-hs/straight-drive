import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FaqsContainerComponent } from './faqs-container.component';

describe('FaqsContainerComponent', () => {
  let component: FaqsContainerComponent;
  let fixture: ComponentFixture<FaqsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have expected 0 items by default', () => {
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('app-faq-item'));
    const components = items.map(item => item.componentInstance);
    fixture.componentInstance.listItems?.reset(components);
    expect(component.listItems?.length).toBe(0);
  });

  it('shouldnot open if no items', () => {
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('app-faq-item'));
    const components = items.map(item => item.componentInstance);
    fixture.componentInstance.listItems?.reset(components);
    component.handleToggle(2);
    expect(component.open).toBe(-1);
  });

  it('should have expected number of items', () => {
    component.faqItems = [
      { question: 'Test', answer: 'Test' },
      { question: 'Test', answer: 'Test' }
    ];
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('app-faq-item'));
    const components = items.map(item => item.componentInstance);
    fixture.componentInstance.listItems?.reset(components);
    expect(component.listItems?.length).toBe(2);
  });

  it('should have no answer opened', () => {
    component.faqItems = [
      { question: 'Test', answer: 'Test' },
      { question: 'Test', answer: 'Test' }
    ];
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('app-faq-item'));
    const components = items.map(item => item.componentInstance);
    fixture.componentInstance.listItems?.reset(components);
    expect(component.open).toBe(-1);
  });

  it('should reset open state when collapsed', () => {
    component.faqItems = [
      { question: 'Test', answer: 'Test' },
      { question: 'Test', answer: 'Test' }
    ];
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('app-faq-item'));
    const components = items.map(item => item.componentInstance);
    fixture.componentInstance.listItems?.reset(components);
    component.open = 1;
    component.handleToggle(1);
    expect(component.open).toBe(-1);
  });

  it('should have only one open answer', () => {
    component.faqItems = [
      { question: 'Test', answer: 'Test' },
      { question: 'Test', answer: 'Test' }
    ];
    fixture.detectChanges();
    const items = fixture.debugElement.queryAll(By.css('app-faq-item'));
    const components = items.map(item => item.componentInstance);
    fixture.componentInstance.listItems?.reset(components);
    component.open = 1;
    component.handleToggle(2);
    expect(component.open).toBe(2);
  });
});
