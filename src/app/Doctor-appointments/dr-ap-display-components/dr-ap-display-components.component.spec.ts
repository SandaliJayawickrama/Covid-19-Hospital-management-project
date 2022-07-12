import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrApDisplayComponentsComponent } from './dr-ap-display-components.component';

describe('DrApDisplayComponentsComponent', () => {
  let component: DrApDisplayComponentsComponent;
  let fixture: ComponentFixture<DrApDisplayComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrApDisplayComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrApDisplayComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
