import { TestBed } from '@angular/core/testing';

import { EnrepiseaddoffreService } from './enrepiseaddoffre.service';

describe('EnrepiseaddoffreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrepiseaddoffreService = TestBed.get(EnrepiseaddoffreService);
    expect(service).toBeTruthy();
  });
});
