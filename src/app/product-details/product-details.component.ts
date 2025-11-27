import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdetailsService } from '../productdetails.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  product: any = "";

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductdetailsService){

    activatedRoute.params.subscribe(
      (data:any)=>{
        console.log("Data",data)
        productService.getProduct(data.id).subscribe(
         (data:any)=>{
          console.log("Data1",data.data)
          this.product = data.data;
         }
          
        )
      }
    )

  }

}






