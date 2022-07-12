import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDisplayComponentsComponent } from './doctor-display-components.component';

describe('DoctorDisplayComponentsComponent', () => {
  let component: DoctorDisplayComponentsComponent;
  let fixture: ComponentFixture<DoctorDisplayComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDisplayComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDisplayComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
