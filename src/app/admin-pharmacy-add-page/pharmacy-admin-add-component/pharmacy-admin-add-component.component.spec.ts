import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyAdminAddComponentComponent } from './pharmacy-admin-add-component.component';

describe('PharmacyAdminAddComponentComponent', () => {
  let component: PharmacyAdminAddComponentComponent;
  let fixture: ComponentFixture<PharmacyAdminAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyAdminAddComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyAdminAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
