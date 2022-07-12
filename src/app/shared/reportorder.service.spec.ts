import { TestBed } from '@angular/core/testing';

import { ReportorderService } from './reportorder.service';

describe('ReportorderService', () => {
  let service: ReportorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
