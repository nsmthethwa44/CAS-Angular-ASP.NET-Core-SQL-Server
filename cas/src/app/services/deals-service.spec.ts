import { TestBed } from '@angular/core/testing';

import { DealsService } from './deals-service';

describe('DealsService', () => {
  let service: DealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
