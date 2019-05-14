import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import {JoinComponent} from "./join/join.component";
import {
  MatButtonModule,
  MatCardModule,
  MatDialog,
  MatDialogModule,
  MatDialogRef, MatInputModule,
  MatListModule
} from "@angular/material";
import { WnwListComponent } from './common/wnw-list/wnw-list.component';
import { CreateComponent } from './create/create.component';
import { AdminPopupComponent } from './common/admin/admin-popup/admin-popup.component';
import {AdminGuard} from "./common/admin/admin.guard";
import {AdminPasswordService} from "./common/admin/admin-password.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    JoinComponent,
    WnwListComponent,
    CreateComponent,
    AdminPopupComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    AdminPopupComponent
  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},
    AdminGuard,
    AdminPasswordService
  ],
  bootstrap: [JoinComponent]
})
export class ManagementModule { }
