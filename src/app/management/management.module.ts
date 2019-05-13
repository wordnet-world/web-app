import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import {JoinComponent} from "./join/join.component";
import {MatButtonModule, MatCardModule, MatListModule} from "@angular/material";

@NgModule({
  declarations: [ JoinComponent ],
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
