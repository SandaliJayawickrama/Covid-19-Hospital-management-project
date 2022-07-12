import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminViewBodyComponentComponent } from './pharmacy-admin-view-body-component.component';

describe('PharmacyAdminViewBodyComponentComponent', () => {
  let component: PharmacyAdminViewBodyComponentComponent;
  let fixture: ComponentFixture<PharmacyAdminViewBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyAdminViewBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyAdminViewBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
