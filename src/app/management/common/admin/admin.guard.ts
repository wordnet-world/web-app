import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AdminPasswordService} from "./admin-password.service";
import {MatDialog} from "@angular/material";
import {AdminPopupComponent} from "./admin-popup/admin-popup.component";

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(private adminPasswordService: AdminPasswordService, private dialog: MatDialog) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise<boolean>(resolve => {
      this.adminPasswordService.checkAdminPassword()
        .then(isAdmin => {
          if (!isAdmin) {
            this.dialog.open(AdminPopupComponent);
          }
          resolve(isAdmin);
        });
    });
  }
  
}
