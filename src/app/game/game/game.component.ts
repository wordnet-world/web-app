import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GameService, Message} from "./game.service";

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
    // this.socket = new WebSocket(`ws://localhost/api/joinGame?teamID=${teamID}`);
    // this.socket.addEventListener('message', event => {
    //   console.log(JSON.parse(event.data));
    // });
    //
    // this.socket.addEventListener('open', event => {
    //   console.log(event);
    //   this.socket.send(JSON.stringify({guess: 'Tree'}));
    // })
  }

  handleMessage(message: Message) {
    console.log(message)
  }

}
