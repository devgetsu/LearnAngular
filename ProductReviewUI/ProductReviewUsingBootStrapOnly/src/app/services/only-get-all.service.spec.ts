import { TestBed } from '@angular/core/testing';

import { OnlyGetAllService } from './only-get-all.service';

describe('OnlyGetAllService', () => {
  let service: OnlyGetAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlyGetAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
