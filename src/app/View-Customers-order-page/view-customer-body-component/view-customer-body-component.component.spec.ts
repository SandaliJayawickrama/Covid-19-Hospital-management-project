import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerBodyComponentComponent } from './view-customer-body-component.component';

describe('ViewCustomerBodyComponentComponent', () => {
  let component: ViewCustomerBodyComponentComponent;
  let fixture: ComponentFixture<ViewCustomerBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
