import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmHeaderComponentComponent } from './order-confirm-header-component.component';

describe('OrderConfirmHeaderComponentComponent', () => {
  let component: OrderConfirmHeaderComponentComponent;
  let fixture: ComponentFixture<OrderConfirmHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderConfirmHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
