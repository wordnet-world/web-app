import { TestBed } from '@angular/core/testing';

import { DeleteGameService } from './delete-game.service';

describe('DeleteGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteGameService = TestBed.get(DeleteGameService);
    expect(service).toBeTruthy();
  });
});
