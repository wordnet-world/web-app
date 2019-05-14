import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Game} from "../common/game/game";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  games: Game[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.games = [];
  }

  handleAdminClick() {
    this.router.navigate(['/admin']);
  }

}
