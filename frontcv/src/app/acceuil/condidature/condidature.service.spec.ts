import { TestBed } from '@angular/core/testing';

import { CondidatureService } from './condidature.service';

describe('CondidatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CondidatureService = TestBed.get(CondidatureService);
    expect(service).toBeTruthy();
  });
});
