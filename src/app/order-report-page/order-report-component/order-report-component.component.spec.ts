import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReportComponentComponent } from './order-report-component.component';

describe('OrderReportComponentComponent', () => {
  let component: OrderReportComponentComponent;
  let fixture: ComponentFixture<OrderReportComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReportComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReportComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
