import { TestBed } from '@angular/core/testing';

import { ConfirmorderService } from './confirmorder.service';

describe('ConfirmorderService', () => {
  let service: ConfirmorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
