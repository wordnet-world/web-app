import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { GameService } from './services/game.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material'
import { MatListModule } from '@angular/material'
import { JoinGameComponent } from './join-game/join-game.component';
import { GameDetailComponent } from './game/game-detail/game-detail.component';
import { GameListEntryComponent } from './game/game-list-entry/game-list-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinGameComponent,
    GameDetailComponent,
    GameListEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
