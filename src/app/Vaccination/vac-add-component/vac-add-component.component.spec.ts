import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacAddComponentComponent } from './vac-add-component.component';

describe('VacAddComponentComponent', () => {
  let component: VacAddComponentComponent;
  let fixture: ComponentFixture<VacAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacAddComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
