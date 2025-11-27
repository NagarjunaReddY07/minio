import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  products: any = [];

  constructor(private adminService: AdminService) {
    this.adminService.getproducts().subscribe(
      (data: any) => {
        this.products = data.data;
        console.log(this.products)
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
  deleteProduct(id: string) {
    this.adminService.deleteProduct(id).subscribe(
      (data: any) => {
        alert("deleted Sucessfully");
        location.reload();

      },
      (err: any) => {
        alert("Internal Server Error")
      }
    )
  }
}