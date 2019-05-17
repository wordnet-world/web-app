import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AdminPasswordService} from "../common/admin/admin-password.service";

class CreateGameResponse {
  data: any;
  error: string;
  success: boolean;
}

@Injectable()
export class CreateGameService {

  constructor(private http: HttpClient,
              private adminPasswordService: AdminPasswordService) { }

  createGame(name: string,
             timeLimit: number,
             teams: string[]): Promise<any> {
    return new Promise<any>(((resolve, reject) => {
      this.http.post<CreateGameResponse>('/api/createGame', {name: name, timeLimit: timeLimit, teams: teams},
        { headers: new HttpHeaders()
            .set('AdminPassword', this.adminPasswordService.getAdminPassword())
        })
        .subscribe(response => {
          if(response.success) {
            resolve(response.data);
            return;
          }
          reject(response.error);
        });
    }));
  }
}
