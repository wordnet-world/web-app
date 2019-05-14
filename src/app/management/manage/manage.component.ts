import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Game} from "../common/game/game";
import {MatDialog} from "@angular/material";
import {CreateGameComponent} from "../create-game/create-game.component";
import {ListGamesService} from "../common/list-games/list-games.service";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  games: Game[] = [];

  constructor(private router: Router,
              private dialog: MatDialog,
              private listGamesService: ListGamesService) { }

  ngOnInit() {
    this.refreshGames();
  }

  refreshGames() {
    this.listGamesService.listGames()
      .then(games => {
        this.games = games;
      })
      .catch(() => {
        this.games = [];
      });
  }

  handleBack() {
    this.router.navigate(["/"]);
  }

  handleNewGame() {
    const dialogRef = this.dialog.open(CreateGameComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.refreshGames();
    });
  }



}
