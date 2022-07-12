import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrApAddComponent } from './dr-ap-add.component';

describe('DrApAddComponent', () => {
  let component: DrApAddComponent;
  let fixture: ComponentFixture<DrApAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrApAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrApAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
