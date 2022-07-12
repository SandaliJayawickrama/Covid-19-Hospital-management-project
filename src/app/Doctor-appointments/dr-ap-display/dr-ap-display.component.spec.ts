import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrApDisplayComponent } from './dr-ap-display.component';

describe('DrApDisplayComponent', () => {
  let component: DrApDisplayComponent;
  let fixture: ComponentFixture<DrApDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrApDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrApDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
