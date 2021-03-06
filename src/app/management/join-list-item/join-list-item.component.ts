import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
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

  handleJoinGame(team: any) {
    this.router.navigate(['/game', team.teamID])
  }

}

@Pipe({
  name: 'complete',
  pure: false
})
export class CompletedPipe implements PipeTransform {

  transform(games: Game[]): any {
    return games.filter(game => game.status !== 'complete');
  }

}

