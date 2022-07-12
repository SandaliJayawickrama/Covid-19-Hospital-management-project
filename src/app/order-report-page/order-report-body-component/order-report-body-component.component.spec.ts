import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReportBodyComponentComponent } from './order-report-body-component.component';

describe('OrderReportBodyComponentComponent', () => {
  let component: OrderReportBodyComponentComponent;
  let fixture: ComponentFixture<OrderReportBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReportBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReportBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
