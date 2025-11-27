import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  constructor(private httpClient:HttpClient) { }
    baseURL: string = "https://shop-ease-mit.vercel.app/api/products"

      getProduct(id: string) {
            return this.httpClient.get(this.baseURL+'/' + id)
      }
}
