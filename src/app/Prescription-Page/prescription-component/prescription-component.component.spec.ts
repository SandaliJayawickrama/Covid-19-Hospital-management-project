import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionComponentComponent } from './prescription-component.component';

describe('PrescriptionComponentComponent', () => {
  let component: PrescriptionComponentComponent;
  let fixture: ComponentFixture<PrescriptionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
