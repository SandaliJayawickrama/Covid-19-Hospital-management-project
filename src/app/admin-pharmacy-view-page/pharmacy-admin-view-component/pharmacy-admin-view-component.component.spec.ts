import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminViewComponentComponent } from './pharmacy-admin-view-component.component';

describe('PharmacyAdminViewComponentComponent', () => {
  let component: PharmacyAdminViewComponentComponent;
  let fixture: ComponentFixture<PharmacyAdminViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyAdminViewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyAdminViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
