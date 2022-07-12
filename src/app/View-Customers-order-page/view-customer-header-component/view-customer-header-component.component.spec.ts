import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerHeaderComponentComponent } from './view-customer-header-component.component';

describe('ViewCustomerHeaderComponentComponent', () => {
  let component: ViewCustomerHeaderComponentComponent;
  let fixture: ComponentFixture<ViewCustomerHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
