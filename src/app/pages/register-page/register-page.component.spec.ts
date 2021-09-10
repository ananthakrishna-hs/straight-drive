import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterPageComponent } from 'src/app/pages/register-page/register-page.component';
import { errorTypes } from 'src/app/core';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPageComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not allow empty name', () => {
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.NAME_INVALID);
  });

  it('name should not allow characters other than letters and digits', () => {
    component.name = 'Special@@#$';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.NAME_INVALID);
  });

  it('name should allow alphanumerics', () => {
    component.name = 'Alpha123';
    component.handleSubmit();
    expect(component.errorMessage).not.toBe(errorTypes.NAME_INVALID);
  });

  it('should not allow empty country code', () => {
    component.name = 'Alpha123';
    component.countryCode = '';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.COUNTRY_CODE_INVALID);
  });

  it('country code should not allow characters other than digits', () => {
    component.name = 'Alpha123';
    component.countryCode = 'Alpha123';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.COUNTRY_CODE_INVALID);
  });

  it('country code should allow digits', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.handleSubmit();
    expect(component.errorMessage).not.toBe(errorTypes.NAME_INVALID);
  });

  it('should not allow empty number', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.NUMBER_INVALID);
  });

  it('number should not allow characters other than digits', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = 'Alpha123';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.NUMBER_INVALID);
  });

  it('number should not allow 8 digits', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '12345678';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.NUMBER_INVALID);
  });

  it('number should allow 9 digits', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '123456789';
    component.handleSubmit();
    expect(component.errorMessage).not.toBe(errorTypes.NUMBER_INVALID);
  });

  it('number should allow 13 digits', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.handleSubmit();
    expect(component.errorMessage).not.toBe(errorTypes.NUMBER_INVALID);
  });

  it('number should not allow 14 digits', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '12345678901234';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.NUMBER_INVALID);
  });

  it('should not allow empty email', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = '';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.EMAIL_INVALID);
  });

  it('should not accept invalid email', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'Test@';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.EMAIL_INVALID);
  });

  it('should not accept invalid email domain', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'Test@test';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.EMAIL_INVALID);
  });

  it('should not accept invalid email domain format', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'abc.def@mail..com';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.EMAIL_INVALID);
  });

  it('should not accept invalid chars in email domain format', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'abc.def@mail#archive.com';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.EMAIL_INVALID);
  });

  it('should allow valid email', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'Test@abc.com';
    component.handleSubmit();
    expect(component.errorMessage).not.toBe(errorTypes.EMAIL_INVALID);
  });

  it('should allow valid chars email domain', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'abc.def@mail-archive.com';
    component.handleSubmit();
    expect(component.errorMessage).not.toBe(errorTypes.EMAIL_INVALID);
  });

  it('should not allow empty state', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'Test@abc.com';
    component.state = '';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.STATE_INVALID);
  });

  it('should not accept invalid state', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'Test@abc.com';
    component.state = 'Random';
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.STATE_INVALID);
  });

  it('should allow valid alphanumerics', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'Test@abc.com';
    component.state = component.states[0];
    component.handleSubmit();
    expect(component.errorMessage).not.toBe(errorTypes.STATE_INVALID);
  });

  it('confirmation should be false by default', () => {
    expect(component.confirmation).toBeFalsy();
  });

  it('should not allow confirmation to terms', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'Test@abc.com';
    component.state = component.states[0];
    component.confirmation = false;
    component.handleSubmit();
    expect(component.errorMessage).toBe(errorTypes.NOT_AGREED);
  });

  it('should accept all valid data', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'Test@abc.com';
    component.state = component.states[0];
    component.confirmation = true;
    component.handleSubmit();
    expect(component.errorMessage).toBeFalsy();
  });

  it('should reset all data', () => {
    component.name = 'Alpha123';
    component.countryCode = '91';
    component.number = '1234567890123';
    component.email = 'Test@abc.com';
    component.state = component.states[0];
    component.handleReset();
    expect(component.errorMessage || component.confirmation).toBeFalsy();
  });
  
});
