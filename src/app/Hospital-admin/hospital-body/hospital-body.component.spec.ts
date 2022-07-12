import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalBodyComponent } from './hospital-body.component';

describe('HospitalBodyComponent', () => {
  let component: HospitalBodyComponent;
  let fixture: ComponentFixture<HospitalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
