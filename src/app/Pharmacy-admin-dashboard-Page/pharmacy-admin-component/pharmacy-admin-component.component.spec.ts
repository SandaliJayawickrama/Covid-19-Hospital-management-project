import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminComponentComponent } from './pharmacy-admin-component.component';

describe('PharmacyAdminComponentComponent', () => {
  let component: PharmacyAdminComponentComponent;
  let fixture: ComponentFixture<PharmacyAdminComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyAdminComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyAdminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
