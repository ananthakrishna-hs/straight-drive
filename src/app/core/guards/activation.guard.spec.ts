import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivationGuard, DataHandlerService } from 'src/app/core';

describe('ActivationGuard', () => {
  let guard: ActivationGuard;
  let service: DataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DataHandlerService]
    });
    guard = TestBed.inject(ActivationGuard);
    service = TestBed.inject(DataHandlerService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should route if not activated', () => {
    service.toggleIsActivate(false);
    expect(guard.canActivate().toString()).toBe('/');
  });

  it('should activate route if activated', () => {
    service.toggleIsActivate(true);
    expect(guard.canActivate().toString()).toBe('true');
  });
});
