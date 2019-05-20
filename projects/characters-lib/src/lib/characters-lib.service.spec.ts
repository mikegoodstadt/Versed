import { TestBed } from '@angular/core/testing';

import { CharactersLibService } from './characters-lib.service';

describe('CharactersLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharactersLibService = TestBed.get(CharactersLibService);
    expect(service).toBeTruthy();
  });
});
