import { TestBed } from '@angular/core/testing';

import { ServiceTarjetaService } from './service-tarjeta.service';

describe('ServiceTarjetaService', () => {
  let service: ServiceTarjetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTarjetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
