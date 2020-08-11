import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosLabListComponent } from './datos-lab-list.component';

describe('DatosLabListComponent', () => {
  let component: DatosLabListComponent;
  let fixture: ComponentFixture<DatosLabListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosLabListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosLabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
