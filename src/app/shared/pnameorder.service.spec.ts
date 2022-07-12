import { TestBed } from '@angular/core/testing';

import { PnameorderService } from './pnameorder.service';

describe('PnameorderService', () => {
  let service: PnameorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PnameorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
