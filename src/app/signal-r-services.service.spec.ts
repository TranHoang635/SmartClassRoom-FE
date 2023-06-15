import { TestBed } from '@angular/core/testing';

import { SignalRServicesService } from './signalr.service';

describe('SignalRServicesService', () => {
  let service: SignalRServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalRServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
