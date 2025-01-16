import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { LoginModel } from '../shared/model/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  constructor() { }

  login(request: LoginModel): Observable<any> {
    return this.http.post(this.baseUrl + '/auth/login', request);
  }

  logout(): Observable<any> {
    ///TODO: Remove all data cache from localStorage ...
    return this.http.post(this.baseUrl + '/auth/logout', {});
  }
}
