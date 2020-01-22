import { TestBed } from '@angular/core/testing';

import { GlobalServService } from './global-serv.service';

describe('GlobalServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalServService = TestBed.get(GlobalServService);
    expect(service).toBeTruthy();
  });
});
