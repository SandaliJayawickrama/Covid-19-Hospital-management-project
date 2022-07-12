import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmComponentComponent } from './order-confirm-component.component';

describe('OrderConfirmComponentComponent', () => {
  let component: OrderConfirmComponentComponent;
  let fixture: ComponentFixture<OrderConfirmComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderConfirmComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
