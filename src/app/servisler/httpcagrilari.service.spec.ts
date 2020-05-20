import { TestBed } from '@angular/core/testing';

import { HttpcagrilariService } from './httpcagrilari.service';

describe('HttpcagrilariService', () => {
  let service: HttpcagrilariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpcagrilariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
