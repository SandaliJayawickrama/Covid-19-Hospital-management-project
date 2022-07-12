import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyOrderComponentComponent } from './pharmacy-order-component.component';

describe('PharmacyOrderComponentComponent', () => {
  let component: PharmacyOrderComponentComponent;
  let fixture: ComponentFixture<PharmacyOrderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyOrderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
