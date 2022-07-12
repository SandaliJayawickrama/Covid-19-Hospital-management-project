import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationadminsideComponent } from './reservationadminside.component';

describe('ReservationadminsideComponent', () => {
  let component: ReservationadminsideComponent;
  let fixture: ComponentFixture<ReservationadminsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationadminsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationadminsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
