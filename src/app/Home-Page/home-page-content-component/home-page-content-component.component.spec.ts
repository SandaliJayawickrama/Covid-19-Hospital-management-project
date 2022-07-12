import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageContentComponentComponent } from './home-page-content-component.component';

describe('HomePageContentComponentComponent', () => {
  let component: HomePageContentComponentComponent;
  let fixture: ComponentFixture<HomePageContentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageContentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
