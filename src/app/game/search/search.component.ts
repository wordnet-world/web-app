import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatInput} from "@angular/material";
import {GameService} from "../game/game.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {

  }

  handleSubmit() {
    this.gameService.handleGuess(this.search);
    this.search = '';
  }




}
