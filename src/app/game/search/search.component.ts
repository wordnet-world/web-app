import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatInput} from "@angular/material";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild("searchBox") searchBox: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.searchBox);
    this.searchBox.nativeElement.focus();

  }

  handleSubmit(e) {
    console.log(e);
  }


}
