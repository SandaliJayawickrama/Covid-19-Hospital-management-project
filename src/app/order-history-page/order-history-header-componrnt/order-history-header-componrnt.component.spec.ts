import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryHeaderComponrntComponent } from './order-history-header-componrnt.component';

describe('OrderHistoryHeaderComponrntComponent', () => {
  let component: OrderHistoryHeaderComponrntComponent;
  let fixture: ComponentFixture<OrderHistoryHeaderComponrntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderHistoryHeaderComponrntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryHeaderComponrntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
