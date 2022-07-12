import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAdminLoginComponent } from './site-admin-login.component';

describe('SiteAdminLoginComponent', () => {
  let component: SiteAdminLoginComponent;
  let fixture: ComponentFixture<SiteAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteAdminLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
