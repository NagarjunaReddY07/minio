import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginform: FormGroup = new FormGroup({
    emailOrMobile: new FormControl(),
    password: new FormControl(),
  });

  constructor(private authService: AuthService, private router: Router) {
     
  }
  ngOnInit(){
  localStorage.removeItem('token'); 
    localStorage.clear()
  }

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  
  login() {
    this.authService.login(this.loginform.value).subscribe(
      (data: any) => {
        alert("Login Success");

        
        console.log("data",data)
        localStorage.setItem("token", data.data.token);

        this.router.navigateByUrl('/dashboard');
      },
      () => {
        alert("Invalid Credentials");
      }
    );
  }
}

