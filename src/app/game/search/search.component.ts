import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatInput} from "@angular/material";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;

  constructor() { }

  ngOnInit() {

  }

  handleSubmit() {
    this.search = '';
  }




}
