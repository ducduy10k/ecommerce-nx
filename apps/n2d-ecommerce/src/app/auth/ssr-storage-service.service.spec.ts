import { TestBed } from '@angular/core/testing';

import { SsrStorageServiceService } from './ssr-storage-service.service';

describe('SsrStorageServiceService', () => {
  let service: SsrStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsrStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
