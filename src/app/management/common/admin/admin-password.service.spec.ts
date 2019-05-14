import { TestBed } from '@angular/core/testing';

import { AdminPasswordService } from './admin-password.service';

describe('AdminPasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminPasswordService = TestBed.get(AdminPasswordService);
    expect(service).toBeTruthy();
  });
});
