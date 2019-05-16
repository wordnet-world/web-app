import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

export class Message {
  guess: string;
  correct: boolean;
  newNodeId: number;
  newNodeText: string;
  connectingNodeId: number;
  connectingNodeText: string;
  undiscoveredNodes:  number;
}

@Injectable()
export class GameService {

  private socket: WebSocket;
  messageSubject: Subject<Message> = new Subject<Message>();

  constructor() {}

  subscribe(observer: (message: Message) => void) {
    this.messageSubject.subscribe(observer);
  }


  handleJoinGame(teamID: string) {
    this.socket = new WebSocket(`ws://localhost/api/joinGame?teamID=${teamID}`);
    this.socket.addEventListener('message', event => this.messageSubject.next(JSON.parse(event.data)));
  }

  handleGuess(guess: string) {
    this.socket.send(JSON.stringify({"guess": guess}))
  }
}
