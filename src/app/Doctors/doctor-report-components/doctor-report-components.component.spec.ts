import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorReportComponentsComponent } from './doctor-report-components.component';

describe('DoctorReportComponentsComponent', () => {
  let component: DoctorReportComponentsComponent;
  let fixture: ComponentFixture<DoctorReportComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorReportComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorReportComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
