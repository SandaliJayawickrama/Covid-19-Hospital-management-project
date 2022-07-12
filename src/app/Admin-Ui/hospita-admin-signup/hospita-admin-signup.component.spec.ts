import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaAdminSignupComponent } from './hospita-admin-signup.component';

describe('HospitaAdminSignupComponent', () => {
  let component: HospitaAdminSignupComponent;
  let fixture: ComponentFixture<HospitaAdminSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitaAdminSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitaAdminSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
