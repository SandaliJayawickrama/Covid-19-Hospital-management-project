import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentadminsideComponent } from './appointmentadminside.component';

describe('AppointmentadminsideComponent', () => {
  let component: AppointmentadminsideComponent;
  let fixture: ComponentFixture<AppointmentadminsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentadminsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentadminsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
