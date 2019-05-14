import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {AdminPasswordService} from "../admin-password.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-popup',
  templateUrl: './admin-popup.component.html',
  styleUrls: ['./admin-popup.component.css']
})
export class AdminPopupComponent implements OnInit {

  passwordInput: string = '';

  constructor(private dialogRef: MatDialogRef<AdminPopupComponent>,
              private adminPasswordService: AdminPasswordService,
              private router: Router) { }

  ngOnInit() {
  }

  handleEnterPassword() {
    this.dialogRef.close();
    this.adminPasswordService.setAdminPassword(this.passwordInput);
    this.router.navigate(['/admin']);
  }

}
