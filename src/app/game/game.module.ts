import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game/game.component';
import { GraphComponent } from './graph/graph.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [GameComponent, GraphComponent, SearchComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
