import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalHomeComponentsComponent } from './hospital-home-components.component';

describe('HospitalHomeComponentsComponent', () => {
  let component: HospitalHomeComponentsComponent;
  let fixture: ComponentFixture<HospitalHomeComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalHomeComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalHomeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
