import { TestBed } from '@angular/core/testing';

import { CrGetAllService } from './cr-get-all.service';

describe('CrGetAllService', () => {
  let service: CrGetAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrGetAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
