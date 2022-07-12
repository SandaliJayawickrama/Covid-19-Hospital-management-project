import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAdminContactComponent } from './hospital-admin-contact.component';

describe('HospitalAdminContactComponent', () => {
  let component: HospitalAdminContactComponent;
  let fixture: ComponentFixture<HospitalAdminContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalAdminContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAdminContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
