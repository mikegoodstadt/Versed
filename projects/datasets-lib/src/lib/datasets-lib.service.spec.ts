import { TestBed } from '@angular/core/testing';

import { DatasetsLibService } from './datasets-lib.service';

describe('DatasetsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatasetsLibService = TestBed.get(DatasetsLibService);
    expect(service).toBeTruthy();
  });
});
