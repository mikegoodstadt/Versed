import { TestBed } from '@angular/core/testing';

import { FormsLibService } from './forms-lib.service';

describe('FormsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsLibService = TestBed.get(FormsLibService);
    expect(service).toBeTruthy();
  });
});
