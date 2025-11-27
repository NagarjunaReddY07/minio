import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { __values } from 'tslib';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupform:FormGroup=new FormGroup({
    name:new FormControl(""),
    email:new FormControl(""),
    mobile:new FormControl(""),
    password:new FormControl(""),
  });
  constructor(private signService:SignupService){}
  data:any=[];
  signup(){
    console.log(this.signupform.value)

    this.signService.signup(this.signupform.value).subscribe(
      (data:any)=>{
        console.log('working');
        
        alert("Successfull created")
      },
      (err:any)=>{
        console.log("Backend Error: ", err);
  console.log("Error Response: ", err.error);
  alert(err.error?.message || "Server Error");
      }
      
    )
  }
  
  }



    
  