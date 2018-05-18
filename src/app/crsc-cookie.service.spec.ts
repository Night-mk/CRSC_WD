import { TestBed, inject } from '@angular/core/testing';

import { CrscCookieService } from './crsc-cookie.service';

describe('CrscCookieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrscCookieService]
    });
  });

  it('should be created', inject([CrscCookieService], (service: CrscCookieService) => {
    expect(service).toBeTruthy();
  }));
});
