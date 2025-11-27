import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productForm = new FormGroup({
    imageUrl: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    brand: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    description:new FormControl(""),
  });

  id: string = "";
  data:any=[]

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;

      }
    )
  }

  submit() {
    this.adminService.addProduct(this.productForm.value).subscribe(
      (data: any) => {
        
        alert('Product added successfully');
        this.productForm.reset();
      },
      (err: any) => {
        console.log("Backend Error: ", err);
  console.log("Error Response: ", err.error);
  alert(err.error?.message || "Server Error");

      }
    );
  }


}