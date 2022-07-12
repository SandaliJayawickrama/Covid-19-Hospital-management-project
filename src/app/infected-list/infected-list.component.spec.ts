import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfectedListComponent } from './infected-list.component';

describe('InfectedListComponent', () => {
  let component: InfectedListComponent;
  let fixture: ComponentFixture<InfectedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfectedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
