import { TestBed } from '@angular/core/testing';

import { HospitaladmincontactService } from './hospitaladmincontact.service';

describe('HospitaladmincontactService', () => {
  let service: HospitaladmincontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitaladmincontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
