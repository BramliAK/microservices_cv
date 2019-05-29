import { TestBed } from '@angular/core/testing';

import { DemandeoffreService } from './demandeoffre.service';

describe('DemandeoffreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandeoffreService = TestBed.get(DemandeoffreService);
    expect(service).toBeTruthy();
  });
});
