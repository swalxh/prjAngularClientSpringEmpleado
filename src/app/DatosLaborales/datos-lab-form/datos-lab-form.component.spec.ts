import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosLabFormComponent } from './datos-lab-form.component';

describe('DatosLabFormComponent', () => {
  let component: DatosLabFormComponent;
  let fixture: ComponentFixture<DatosLabFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosLabFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosLabFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
