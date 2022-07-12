import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPatientsComponent } from './track-patients.component';

describe('TrackPatientsComponent', () => {
  let component: TrackPatientsComponent;
  let fixture: ComponentFixture<TrackPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
