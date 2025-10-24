import { TestBed } from '@angular/core/testing';

import { CarAuctionService } from './car-auction-service';

describe('CarAuctionService', () => {
  let service: CarAuctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarAuctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
