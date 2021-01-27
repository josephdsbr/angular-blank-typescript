import { TestBed } from '@angular/core/testing';

import { SignedGuardService } from './signed-guard.service';

describe('SignedGuardService', () => {
  let service: SignedGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignedGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
