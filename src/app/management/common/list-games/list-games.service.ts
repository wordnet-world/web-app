import { Injectable } from '@angular/core';
import {Game} from "../game/game";
import {HttpClient, HttpRequest, HttpResponse} from "@angular/common/http";

class ListGamesResponse {
  data: Game[];
  error: string;
  success: boolean;
}

@Injectable()
export class ListGamesService {

  constructor(private http: HttpClient) { }

  listGames(): Promise<Game[]> {
    return new Promise<Game[]>((resolve, reject) => {
      this.http.post<ListGamesResponse>('/api/listGames', '{ "fields": [] }')
        .subscribe(response => {
          if (! response.success) {
            reject(response.error);
            return;
          }
          resolve(response.data);
        });
    });
  }
}
