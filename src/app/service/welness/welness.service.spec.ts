import { TestBed } from '@angular/core/testing';

import { WelnessService } from './welness.service';

describe('WelnessService', () => {
  let service: WelnessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelnessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
