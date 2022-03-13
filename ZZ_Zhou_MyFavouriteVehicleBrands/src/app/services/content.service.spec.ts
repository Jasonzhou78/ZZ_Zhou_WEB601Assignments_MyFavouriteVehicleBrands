import { TestBed } from '@angular/core/testing';

import { CarService } from './content.service';

describe('ContentDBService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
