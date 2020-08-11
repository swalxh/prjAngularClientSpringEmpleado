import { TestBed } from '@angular/core/testing';

import { ServiceGenericService } from './service-generic.service';

describe('ServiceGenericService', () => {
  let service: ServiceGenericService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
