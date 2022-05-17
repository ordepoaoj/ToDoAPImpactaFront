import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any) {
    const result = await this.http.post<any>(`${environment.api}/api/login`, user).toPromise();
    if(result && result.token) {
      window.localStorage.setItem('token', result.token);
      return true;
    }
    return false;
  }
}
