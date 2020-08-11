import { TestBed } from '@angular/core/testing';

import { ServiceEmpleadoService } from './service-empleado.service';

describe('ServiceEmpleadoService', () => {
  let service: ServiceEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
