import { TestBed } from '@angular/core/testing';

import { VerYComprarService } from './ver-y-comprar.service';

describe('VerYComprarService', () => {
  let service: VerYComprarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerYComprarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
