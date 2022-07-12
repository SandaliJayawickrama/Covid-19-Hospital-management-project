import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAddComponentsComponent } from './doctor-add-components.component';

describe('DoctorAddComponentsComponent', () => {
  let component: DoctorAddComponentsComponent;
  let fixture: ComponentFixture<DoctorAddComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAddComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAddComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
