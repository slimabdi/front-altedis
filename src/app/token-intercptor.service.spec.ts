import { TestBed } from '@angular/core/testing';

import { TokenIntercptorService } from './token-intercptor.service';

describe('TokenIntercptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenIntercptorService = TestBed.get(TokenIntercptorService);
    expect(service).toBeTruthy();
  });
});
