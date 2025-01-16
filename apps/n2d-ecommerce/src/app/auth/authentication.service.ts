import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { LoginModel } from '../shared/model/login.model';
import { Observable } from 'rxjs';
import { CreateQueryResult } from '@tanstack/angular-query-experimental';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  constructor() { }

  getTokenLocalStorage(): string | null {
    // return localStorage.getItem('token');
    return '';
  }

  checkValidToken(): Observable<boolean> {
    return this.http.get<boolean>(this.apiUrl + '/auth/valid-token');
  }

  async isAuthenticated(): Promise<boolean> {
   try {
      var res = await this.http.get<boolean>(this.apiUrl + '/auth/valid-token').toPromise();
      return res ?? false;
   } catch (error) {
     return false;
   }     
  }

  login(request: LoginModel): Observable<any> {
    return this.http.post(this.apiUrl + '/auth/login', request);
  }

  logout(): Observable<any> {
    ///TODO: Remove all data cache from localStorage ...
    return this.http.post(this.apiUrl + '/auth/logout', {});
  }

  getUserInfo() {
    return this.http.get(this.apiUrl + '/auth/user-info');
  }
}
