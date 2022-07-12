import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyHomePageComponentComponent } from './pharmacy-home-page-component.component';

describe('PharmacyHomePageComponentComponent', () => {
  let component: PharmacyHomePageComponentComponent;
  let fixture: ComponentFixture<PharmacyHomePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyHomePageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyHomePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
