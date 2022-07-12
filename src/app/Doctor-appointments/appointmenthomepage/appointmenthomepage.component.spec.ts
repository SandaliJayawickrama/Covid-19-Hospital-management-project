import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmenthomepageComponent } from './appointmenthomepage.component';

describe('AppointmenthomepageComponent', () => {
  let component: AppointmenthomepageComponent;
  let fixture: ComponentFixture<AppointmenthomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmenthomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmenthomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
