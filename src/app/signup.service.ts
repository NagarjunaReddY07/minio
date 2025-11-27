import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

    constructor(private httpClient:HttpClient) { }
 
  signup(data:any){
    return this.httpClient.post('https://shop-ease-mit.vercel.app/api/auth/signup', data);
  }
}
