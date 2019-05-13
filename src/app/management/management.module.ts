import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import {JoinComponent} from "./join/join.component";
import {MatButtonModule, MatCardModule, MatListModule} from "@angular/material";
import { WnwListComponent } from './common/wnw-list/wnw-list.component';

@NgModule({
  declarations: [ JoinComponent, WnwListComponent ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  bootstrap: [JoinComponent]
})
export class ManagementModule { }
