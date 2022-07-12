import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyOrderBodyComponentComponent } from './pharmacy-order-body-component.component';

describe('PharmacyOrderBodyComponentComponent', () => {
  let component: PharmacyOrderBodyComponentComponent;
  let fixture: ComponentFixture<PharmacyOrderBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyOrderBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyOrderBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
