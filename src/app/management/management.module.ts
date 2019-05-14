import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import {JoinComponent} from './join/join.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDialogRef, MatIconModule, MatInputModule,
  MatListModule
} from '@angular/material';
import { WnwListComponent } from './common/wnw-list/wnw-list.component';
import { AdminPopupComponent } from './common/admin/admin-popup/admin-popup.component';
import { AdminGuard } from './common/admin/admin.guard';
import { AdminPasswordService } from './common/admin/admin-password.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [
    JoinComponent,
    WnwListComponent,
    AdminPopupComponent,
    ManageComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
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
