import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageHeaderComponentComponent } from './home-page-header-component.component';

describe('HomePageHeaderComponentComponent', () => {
  let component: HomePageHeaderComponentComponent;
  let fixture: ComponentFixture<HomePageHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
