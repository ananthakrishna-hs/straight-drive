import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DataHandlerService } from './data-handler.service';

describe('DataHandlerService', () => {
  let service: DataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle activation status', () => {
    service.toggleIsActivate(false);
    expect(service.isActivated()).toBeFalse();
  });
});
