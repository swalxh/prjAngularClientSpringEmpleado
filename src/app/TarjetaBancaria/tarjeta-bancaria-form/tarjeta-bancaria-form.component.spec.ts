import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaBancariaFormComponent } from './tarjeta-bancaria-form.component';

describe('TarjetaBancariaFormComponent', () => {
  let component: TarjetaBancariaFormComponent;
  let fixture: ComponentFixture<TarjetaBancariaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaBancariaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaBancariaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
