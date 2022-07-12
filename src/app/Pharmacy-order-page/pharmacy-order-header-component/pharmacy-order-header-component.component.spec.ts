import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyOrderHeaderComponentComponent } from './pharmacy-order-header-component.component';

describe('PharmacyOrderHeaderComponentComponent', () => {
  let component: PharmacyOrderHeaderComponentComponent;
  let fixture: ComponentFixture<PharmacyOrderHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyOrderHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyOrderHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
