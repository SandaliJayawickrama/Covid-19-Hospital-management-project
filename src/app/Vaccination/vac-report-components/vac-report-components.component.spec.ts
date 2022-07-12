import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacReportComponentsComponent } from './vac-report-components.component';

describe('VacReportComponentsComponent', () => {
  let component: VacReportComponentsComponent;
  let fixture: ComponentFixture<VacReportComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacReportComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacReportComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
