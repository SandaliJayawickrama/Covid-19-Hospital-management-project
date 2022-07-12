import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadminDashComponentComponent } from './padmin-dash-component.component';

describe('PadminDashComponentComponent', () => {
  let component: PadminDashComponentComponent;
  let fixture: ComponentFixture<PadminDashComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadminDashComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadminDashComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
