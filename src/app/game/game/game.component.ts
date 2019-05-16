import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private socket: WebSocket;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const gameID = this.route.snapshot.paramMap.get('gameID');
    this.socket = new WebSocket(`ws://localhost/api/joinGame?gameID=${gameID}&teamID=0`);
    this.socket.addEventListener('message', event => {
      console.log(JSON.parse(event.data));
    });

    this.socket.addEventListener('open', event => {
      console.log(event);
      this.socket.send(JSON.stringify({guess: 'Tree'}));
    })
  }

}
