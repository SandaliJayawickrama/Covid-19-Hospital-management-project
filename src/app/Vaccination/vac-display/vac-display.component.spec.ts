import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacDisplayComponent } from './vac-display.component';

describe('VacDisplayComponent', () => {
  let component: VacDisplayComponent;
  let fixture: ComponentFixture<VacDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
