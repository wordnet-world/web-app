import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../common/game/game";
import {Router} from "@angular/router";

@Component({
  selector: 'app-join-list-item',
  templateUrl: './join-list-item.component.html',
  styleUrls: ['./join-list-item.component.css']
})
export class JoinListItemComponent implements OnInit {

  @Input() game: Game;
  @Input() isLast: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleJoinGame() {
    this.router.navigate(['/game', this.game.teams[0].teamID])
  }

}
