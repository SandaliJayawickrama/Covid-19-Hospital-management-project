import { TestBed } from '@angular/core/testing';

import { PharmacyuiService } from './pharmacyui.service';

describe('PharmacyuiService', () => {
  let service: PharmacyuiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacyuiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
