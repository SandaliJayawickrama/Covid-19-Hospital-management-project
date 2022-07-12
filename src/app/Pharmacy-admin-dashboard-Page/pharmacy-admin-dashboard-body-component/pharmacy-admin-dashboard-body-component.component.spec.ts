import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminDashboardBodyComponentComponent } from './pharmacy-admin-dashboard-body-component.component';

describe('PharmacyAdminDashboardBodyComponentComponent', () => {
  let component: PharmacyAdminDashboardBodyComponentComponent;
  let fixture: ComponentFixture<PharmacyAdminDashboardBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyAdminDashboardBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyAdminDashboardBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
