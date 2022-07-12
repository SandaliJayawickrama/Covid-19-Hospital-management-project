import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryBodyComponentComponent } from './order-history-body-component.component';

describe('OrderHistoryBodyComponentComponent', () => {
  let component: OrderHistoryBodyComponentComponent;
  let fixture: ComponentFixture<OrderHistoryBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderHistoryBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
