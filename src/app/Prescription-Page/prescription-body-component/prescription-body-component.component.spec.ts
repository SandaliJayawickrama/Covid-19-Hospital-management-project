import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionBodyComponentComponent } from './prescription-body-component.component';

describe('PrescriptionBodyComponentComponent', () => {
  let component: PrescriptionBodyComponentComponent;
  let fixture: ComponentFixture<PrescriptionBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
