import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadminDashHeaderComponentComponent } from './padmin-dash-header-component.component';

describe('PadminDashHeaderComponentComponent', () => {
  let component: PadminDashHeaderComponentComponent;
  let fixture: ComponentFixture<PadminDashHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadminDashHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadminDashHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
