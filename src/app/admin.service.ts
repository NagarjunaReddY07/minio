import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

   baseURL:string="https://shop-ease-mit.vercel.app/api/products"
  getproducts(){
    return this.httpClient.get("https://shop-ease-mit.vercel.app/api/products")
  }

  deleteProduct(id: string) {
  return this.httpClient.delete(this.baseURL + "/" + id);
}
  addProduct(product: any) {
    return this.httpClient.post(this.baseURL, product);
  }
 
}
