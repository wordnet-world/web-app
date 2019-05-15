import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game/game.component';
import { GraphComponent } from './graph/graph.component';
import { SearchComponent } from './search/search.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from "@angular/material";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [GameComponent, GraphComponent, SearchComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ]
})
export class GameModule { }
