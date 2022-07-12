import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyUIComponentComponent } from './pharmacy-ui-component.component';

describe('PharmacyUIComponentComponent', () => {
  let component: PharmacyUIComponentComponent;
  let fixture: ComponentFixture<PharmacyUIComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyUIComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyUIComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
