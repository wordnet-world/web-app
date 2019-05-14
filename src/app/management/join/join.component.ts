import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleAdminClick() {
    this.router.navigate(['/admin']);
  }

}
