import { TestBed } from '@angular/core/testing';

import { DonationlibService } from './donationlib.service';

describe('DonationlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationlibService = TestBed.get(DonationlibService);
    expect(service).toBeTruthy();
  });
});
