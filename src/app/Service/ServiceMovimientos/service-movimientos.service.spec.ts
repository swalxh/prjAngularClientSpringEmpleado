import { TestBed } from '@angular/core/testing';

import { ServiceMovimientosService } from './service-movimientos.service';

describe('ServiceMovimientosService', () => {
  let service: ServiceMovimientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMovimientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
