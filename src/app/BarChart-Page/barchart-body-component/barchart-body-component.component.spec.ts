import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartBodyComponentComponent } from './barchart-body-component.component';

describe('BarchartBodyComponentComponent', () => {
  let component: BarchartBodyComponentComponent;
  let fixture: ComponentFixture<BarchartBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
