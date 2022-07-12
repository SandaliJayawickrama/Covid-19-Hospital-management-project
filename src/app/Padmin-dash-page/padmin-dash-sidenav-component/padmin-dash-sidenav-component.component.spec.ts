import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadminDashSidenavComponentComponent } from './padmin-dash-sidenav-component.component';

describe('PadminDashSidenavComponentComponent', () => {
  let component: PadminDashSidenavComponentComponent;
  let fixture: ComponentFixture<PadminDashSidenavComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadminDashSidenavComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadminDashSidenavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
