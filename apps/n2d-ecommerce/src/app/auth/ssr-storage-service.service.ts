import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SsrStorageServiceService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  constructor() { }

  login(): void {
    this.http.post(this.baseUrl + '/auth/login', {}).subscribe();
  }
}
