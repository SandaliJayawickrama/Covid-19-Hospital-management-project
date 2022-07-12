import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrApAddComponentsComponent } from './dr-ap-add-components.component';

describe('DrApAddComponentsComponent', () => {
  let component: DrApAddComponentsComponent;
  let fixture: ComponentFixture<DrApAddComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrApAddComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrApAddComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
