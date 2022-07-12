import { ComponentFixture, TestBed } from '@angular/core/testing';

import { paymentMethodComponent } from './paymentMethod.component';

describe('HomeComponent', () => {
  let component: paymentMethodComponent;
  let fixture: ComponentFixture<paymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ paymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(paymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
