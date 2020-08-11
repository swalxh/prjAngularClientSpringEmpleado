import { TestBed } from '@angular/core/testing';

import { ServiceDatosLabService } from './service-datos-lab.service';

describe('ServiceDatosLabService', () => {
  let service: ServiceDatosLabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDatosLabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
