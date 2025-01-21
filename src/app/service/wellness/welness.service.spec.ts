import { TestBed } from '@angular/core/testing';

import { WellnessService } from './welness.service';

describe('WelnessService', () => {
  let service: WellnessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WellnessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
