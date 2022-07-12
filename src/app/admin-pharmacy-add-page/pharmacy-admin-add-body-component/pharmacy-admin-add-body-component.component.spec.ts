import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminAddBodyComponentComponent } from './pharmacy-admin-add-body-component.component';

describe('PharmacyAdminAddBodyComponentComponent', () => {
  let component: PharmacyAdminAddBodyComponentComponent;
  let fixture: ComponentFixture<PharmacyAdminAddBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyAdminAddBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyAdminAddBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
