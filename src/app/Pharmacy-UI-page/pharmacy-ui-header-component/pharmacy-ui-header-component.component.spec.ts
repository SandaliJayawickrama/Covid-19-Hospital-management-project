import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyUIHeaderComponentComponent } from './pharmacy-ui-header-component.component';

describe('PharmacyUIHeaderComponentComponent', () => {
  let component: PharmacyUIHeaderComponentComponent;
  let fixture: ComponentFixture<PharmacyUIHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyUIHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyUIHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
