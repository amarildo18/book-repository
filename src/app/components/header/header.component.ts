import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { isAuth } from '../../shared/functions/is-auth';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, AsyncPipe, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router)
   isAuth$ = isAuth();

   logout(){
    this.authService.logout().subscribe(response =>{
       this.router.navigate(['login']);
    });
   }

   login(){
    this.router.navigate(['login']);
   }
}
