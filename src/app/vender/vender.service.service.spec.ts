import { TestBed } from '@angular/core/testing';

import { VenderServiceService } from './vender.service.service';

describe('VenderServiceService', () => {
  let service: VenderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
