import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacReportAdminComponent } from './vac-report-admin.component';

describe('VacReportAdminComponent', () => {
  let component: VacReportAdminComponent;
  let fixture: ComponentFixture<VacReportAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacReportAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacReportAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
