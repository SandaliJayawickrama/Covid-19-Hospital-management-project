import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartComponentComponent } from './barchart-component.component';

describe('BarchartComponentComponent', () => {
  let component: BarchartComponentComponent;
  let fixture: ComponentFixture<BarchartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
