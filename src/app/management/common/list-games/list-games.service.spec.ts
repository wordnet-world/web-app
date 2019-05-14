import { TestBed } from '@angular/core/testing';

import { ListGamesService } from './list-games.service';

describe('ListGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListGamesService = TestBed.get(ListGamesService);
    expect(service).toBeTruthy();
  });
});
