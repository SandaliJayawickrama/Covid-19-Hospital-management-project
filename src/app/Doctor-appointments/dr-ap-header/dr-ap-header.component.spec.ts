import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrApHeaderComponent } from './dr-ap-header.component';

describe('DrApHeaderComponent', () => {
  let component: DrApHeaderComponent;
  let fixture: ComponentFixture<DrApHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrApHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrApHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
