import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadminDashBodyComponentComponent } from './padmin-dash-body-component.component';

describe('PadminDashBodyComponentComponent', () => {
  let component: PadminDashBodyComponentComponent;
  let fixture: ComponentFixture<PadminDashBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadminDashBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadminDashBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
