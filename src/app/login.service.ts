import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) {}
  
  getsignup(){
    return this.httpClient.get("https://shop-ease-mit.vercel.app/api")
  }

}
