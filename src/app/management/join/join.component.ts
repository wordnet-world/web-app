import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Game} from "../common/game/game";
import {ListGamesService} from "../common/list-games/list-games.service";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  games: Game[] = [];

  constructor(private router: Router,
              private listGamesService: ListGamesService) { }

  ngOnInit() {
    this.listGamesService.listGames()
      .then(games => {
        this.games = games;
      });
  }

  handleAdminClick() {
    this.router.navigate(['/admin']);
  }

}
