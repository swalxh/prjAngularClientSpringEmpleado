import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientosListComponent } from './movimientos-list.component';

describe('MovimientosListComponent', () => {
  let component: MovimientosListComponent;
  let fixture: ComponentFixture<MovimientosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
