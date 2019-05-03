import { Injectable } from '@angular/core';
import { GameBuilder, Game } from '../model/game';
import { TeamBuilder } from '../model/team';

@Injectable()
export class GameService {

  games: Game[];

  constructor() {
    this.games = [
      new GameBuilder()
        .name("Marvel Movies")
        .team(new TeamBuilder()
          .name("Foo")
          .build())
        .team(new TeamBuilder()
          .name("Bar")
          .build())
        .team(new TeamBuilder()
          .name("Baz")
          .build())
        .build(),
      new GameBuilder()
        .name("Disney")
        .team(new TeamBuilder()
          .name("House of Mouse")
          .build())
        .build()
    ]
  }
}
