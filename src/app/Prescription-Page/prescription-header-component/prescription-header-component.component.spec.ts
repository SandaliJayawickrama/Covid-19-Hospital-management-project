import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionHeaderComponentComponent } from './prescription-header-component.component';

describe('PrescriptionHeaderComponentComponent', () => {
  let component: PrescriptionHeaderComponentComponent;
  let fixture: ComponentFixture<PrescriptionHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
