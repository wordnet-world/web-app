import { TestBed } from '@angular/core/testing';

import { StartGameService } from './start-game.service';

describe('StartGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartGameService = TestBed.get(StartGameService);
    expect(service).toBeTruthy();
  });
});
