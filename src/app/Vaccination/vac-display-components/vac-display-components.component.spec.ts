import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacDisplayComponentsComponent } from './vac-display-components.component';

describe('VacDisplayComponentsComponent', () => {
  let component: VacDisplayComponentsComponent;
  let fixture: ComponentFixture<VacDisplayComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacDisplayComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacDisplayComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
