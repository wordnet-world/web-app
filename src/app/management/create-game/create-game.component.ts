import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {CreateGameService} from "./create-game.service";

@Component({
  selector: 'app-new-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  name: string;
  timeLimit: number;


  constructor(private dialogRef: MatDialogRef<CreateGameComponent>,
              private createGameService: CreateGameService) { }

  ngOnInit() {
  }

  handleNewGame() {
    this.createGameService.createGame(this.name, this.timeLimit, ['team1', 'team2', 'team3']);
    this.dialogRef.close();
  }

}
