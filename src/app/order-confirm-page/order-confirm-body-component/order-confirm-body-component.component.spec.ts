import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmBodyComponentComponent } from './order-confirm-body-component.component';

describe('OrderConfirmBodyComponentComponent', () => {
  let component: OrderConfirmBodyComponentComponent;
  let fixture: ComponentFixture<OrderConfirmBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderConfirmBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
