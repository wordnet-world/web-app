import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Game} from "../common/game/game";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  games: Game[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleBack() {
    this.router.navigate(["/"]);
  }

}
