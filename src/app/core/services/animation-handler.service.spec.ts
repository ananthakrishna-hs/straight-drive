import { TestBed } from '@angular/core/testing';

import { AnimationHandlerService } from './animation-handler.service';

describe('AnimationHandlerService', () => {
  let service: AnimationHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
