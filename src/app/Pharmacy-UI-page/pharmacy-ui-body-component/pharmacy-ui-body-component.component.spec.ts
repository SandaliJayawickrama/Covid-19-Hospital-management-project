import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyUIBodyComponentComponent } from './pharmacy-ui-body-component.component';

describe('PharmacyUIBodyComponentComponent', () => {
  let component: PharmacyUIBodyComponentComponent;
  let fixture: ComponentFixture<PharmacyUIBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyUIBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyUIBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
