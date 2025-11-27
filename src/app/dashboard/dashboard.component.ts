import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  products: any = [];

  constructor(private dashboardService: DashboardService,private router:Router) {
    this.dashboardService.getproducts().subscribe(
      (data: any) => {
        console.log("Afzal",data.data[0]._id)
        this.products = data.data;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
  term: string = "";
  filterproducts() {
    this.dashboardService.filterproducts(this.term).subscribe(
      (data: any) => {
        this.products = data.data || data;
      },
      (err: any) => {
        alert('Internal server error')
      }
    )
  }
  sortType: string = "";
  items:number=12;
  sort() {
    if (this.sortType === "PLH") {
      // api call with price low to high
      this.dashboardService.sortPriceLowToHigh().subscribe(
        (data:any) => this.products = data?.data
      )
    }
    
    else if (this.sortType === "PHL") {
      // api calll with price high to low
      this.dashboardService.sortPriceLowToHigh().subscribe(
        (data:any) => this.products = data?.data
      )
    }
    else if (this.sortType === "RHL") {
      //api call with rating high to low
      this.dashboardService.sortRatingHighToLow().subscribe(
        (data:any) => this.products = data?.data
      )
    }
    else if (this.sortType === "AZ") {
      this.dashboardService.sortAtoZ().subscribe(
        (data:any) => this.products = data?.data
      )
    }
    else if(this.sortType==="ZA"){
      this.dashboardService.sortZtoA().subscribe(
        (data:any) => this.products = data?.data
        
      )
    }


    if(this.items){
      this.dashboardService.itemsPerPage(this.items).subscribe(
        (data:any) => this.products = data?.data
      )
    }
    (err:any)=>{
        alert(err.error?.message || "Server Error");

    }

  }
cart:any[]=[];
  addtocart(product:string){
  this.cart.push(product);
  alert("Item added to cart");
  console.log("cart:",this.cart);
}

  logout(){
    this.router.navigateByUrl('/login')
    localStorage.removeItem("token");
  }
}
