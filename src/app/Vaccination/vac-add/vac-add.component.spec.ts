import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacAddComponent } from './vac-add.component';

describe('VacAddComponent', () => {
  let component: VacAddComponent;
  let fixture: ComponentFixture<VacAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
