import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccineResComponent } from './vaccine-res.component';

describe('VaccineResComponent', () => {
  let component: VaccineResComponent;
  let fixture: ComponentFixture<VaccineResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccineResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccineResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
