import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GameService, UpdateMessage} from "./game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gameService: GameService) {}

  ngOnInit(): void {
    const teamID = this.route.snapshot.paramMap.get('teamID');
    this.gameService.subscribe(this.handleMessage);
    this.gameService.handleJoinGame(teamID);
  }

  handleMessage(message: UpdateMessage) {
    console.log(message)
  }

}
