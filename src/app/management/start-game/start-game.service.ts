import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaderResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {AdminPasswordService} from "../common/admin/admin-password.service";
import {Game} from "../common/game/game";

class StartGameResponse {
  data: string;
  error: string;
  success: boolean;
}

@Injectable()
export class StartGameService {

  constructor(private http: HttpClient,
              private adminPasswordService: AdminPasswordService) { }

  startGame(game: Game): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.post<StartGameResponse>('/api/startGame', null, {
        params: new HttpParams()
          .set('gameID', game.gameID.toString()),
        headers: new HttpHeaders()
          .set('AdminPassword', this.adminPasswordService.getAdminPassword())
      }).subscribe(response => {
        if(response.success) {
          resolve(response.data);
          return;
        }
        reject(response.error);
      });
    });
  }
}
