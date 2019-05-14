import { Injectable } from '@angular/core';
import {Game} from "../common/game/game";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AdminPasswordService} from "../common/admin/admin-password.service";

class DeleteGameResponse {
  data: string;
  error: string;
  success: boolean;
}

@Injectable()
export class DeleteGameService {

  constructor(private http: HttpClient, private adminPasswordService: AdminPasswordService) { }

  deleteGame(game: Game): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.delete<DeleteGameResponse>('/api/deleteGame', {
        headers: new HttpHeaders({
          'AdminPassword': this.adminPasswordService.getAdminPassword()
        }),
        params: new HttpParams().set('gameID', game.gameID.toString())
      }).subscribe(response => {
        if (response.success) {
          resolve(response.data);
          return;
        }
        reject(response.error);
      });
    });
  }
}
