import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyHomePageBodyComponentComponent } from './pharmacy-home-page-body-component.component';

describe('PharmacyHomePageBodyComponentComponent', () => {
  let component: PharmacyHomePageBodyComponentComponent;
  let fixture: ComponentFixture<PharmacyHomePageBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyHomePageBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyHomePageBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
