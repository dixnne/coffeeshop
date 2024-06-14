import { TestBed } from '@angular/core/testing';

import { CoffeeshopAPIService } from './coffeeshop-api.service';

describe('CoffeeshopAPIService', () => {
  let service: CoffeeshopAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeshopAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
