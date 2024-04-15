import { TestBed } from '@angular/core/testing';

import { MsCrudService } from './ms-crud.service';

describe('MsCrudService', () => {
  let service: MsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
