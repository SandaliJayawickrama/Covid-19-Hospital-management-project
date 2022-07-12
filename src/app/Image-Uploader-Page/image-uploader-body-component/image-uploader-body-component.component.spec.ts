import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploaderBodyComponentComponent } from './image-uploader-body-component.component';

describe('ImageUploaderBodyComponentComponent', () => {
  let component: ImageUploaderBodyComponentComponent;
  let fixture: ComponentFixture<ImageUploaderBodyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploaderBodyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploaderBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
