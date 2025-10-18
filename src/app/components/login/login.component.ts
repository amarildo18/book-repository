import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';
import { Router } from '@angular/router';
//import { AuthServices } from '../../services/auth.services';
//import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule/* , NgIf */],
  providers:[AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //constructor(private readonly authService: AuthServices/* , private readonly employeeService: EmployeeService */){}
  readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  credentials = { email: 'teste' , password: 'password'};

  login(){
    if(this.credentials.email && this.credentials.password){
      this.authService.login(this.credentials).subscribe(respose =>{
        this.router.navigate(['home']);
      });

    }
  }

}
