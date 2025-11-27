import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'https://shop-ease-mit.vercel.app';

  login(user: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/api/auth/login`, user);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("token");   
  }
}
