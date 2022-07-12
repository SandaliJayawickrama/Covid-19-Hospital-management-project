import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerComponentComponent } from './view-customer-component.component';

describe('ViewCustomerComponentComponent', () => {
  let component: ViewCustomerComponentComponent;
  let fixture: ComponentFixture<ViewCustomerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
