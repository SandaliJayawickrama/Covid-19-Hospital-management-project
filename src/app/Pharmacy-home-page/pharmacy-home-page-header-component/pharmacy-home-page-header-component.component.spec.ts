import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyHomePageHeaderComponentComponent } from './pharmacy-home-page-header-component.component';

describe('PharmacyHomePageHeaderComponentComponent', () => {
  let component: PharmacyHomePageHeaderComponentComponent;
  let fixture: ComponentFixture<PharmacyHomePageHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyHomePageHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyHomePageHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
