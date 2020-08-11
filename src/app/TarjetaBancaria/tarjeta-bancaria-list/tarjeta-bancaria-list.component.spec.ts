import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaBancariaListComponent } from './tarjeta-bancaria-list.component';

describe('TarjetaBancariaListComponent', () => {
  let component: TarjetaBancariaListComponent;
  let fixture: ComponentFixture<TarjetaBancariaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaBancariaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaBancariaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
