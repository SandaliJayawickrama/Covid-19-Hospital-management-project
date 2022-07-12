import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadBodyComponentComponent } from './image-upload-body-component.component';

describe('ImageUploadBodyComponentComponent', () => {
  let component: ImageUploadBodyComponentComponent;
  let fixture: ComponentFixture<ImageUploadBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploadBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
