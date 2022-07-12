import { TestBed } from '@angular/core/testing';
import { ResformService } from './resform.service';

describe('ResformService', () => {
  let service: ResformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
