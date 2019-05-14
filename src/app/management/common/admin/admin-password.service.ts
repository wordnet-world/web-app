import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

class AdminPasswordCheckResponse {
  data: string;
  error: string;
  success: boolean;
}

@Injectable()
export class AdminPasswordService {

  private adminPassword: string;

  constructor(private http: HttpClient) { }

  setAdminPassword(adminPassword: string) {
    this.adminPassword = adminPassword;
  }

  getAdminPassword(): string {
    return this.adminPassword;
  }

  checkAdminPassword(): Promise<boolean> {
    return new Promise<boolean>((resolve => {
      if (this.adminPassword === undefined) {
        resolve(false);
      }
      this.http.get<AdminPasswordCheckResponse>('/api/adminPasswordCheck', {
        headers: new HttpHeaders({
          AdminPassword: this.adminPassword,
          'Content-Type': 'application/json'
        })
      }).subscribe(response => {
          resolve(response.success);
        });
    }));

  }
}
