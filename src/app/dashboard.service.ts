import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  baseURL: string = "https://shop-ease-mit.vercel.app/api/products"
  
  getproducts() {
    return this.http.get("https://shop-ease-mit.vercel.app/api/products");
  }
  filterproducts(term: string) {
    return this.http.get(this.baseURL + '?filter=' + term)

  }


  sortPriceLowToHigh() {
    
    return this.http.get(this.baseURL + "?sortBy=price&order=asc");
  }

  sortPriceHighToLow() {
    return this.http.get(this.baseURL + "?sortBy=price&order=desc");
  }
sortRatingHighToLow() {
  return this.http.get(this.baseURL + "?sortBy=rating&order=desc");
}


 sortAtoZ() {
  return this.http.get(this.baseURL + "?sortBy=name&order=asc");
}

sortZtoA() {
  return this.http.get(this.baseURL + "?sortBy=name&order=desc");
}

itemsPerPage(limit: number) {
  return this.http.get(this.baseURL + "?limit=" + limit);
}



}
