import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'wnw-list',
  templateUrl: './wnw-list.component.html',
  styleUrls: ['./wnw-list.component.css']
})
export class WnwListComponent implements OnInit {

  @Input() title: string;
  @Input() buttonText: string;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick(e) {
    this.buttonClick.emit(e);
  }


}
