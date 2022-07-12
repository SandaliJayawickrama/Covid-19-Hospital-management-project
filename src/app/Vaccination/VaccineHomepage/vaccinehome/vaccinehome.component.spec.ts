import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinehomeComponent } from './vaccinehome.component';

describe('VaccinehomeComponent', () => {
  let component: VaccinehomeComponent;
  let fixture: ComponentFixture<VaccinehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
