import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://my-json-server.typicode.com/JoaoGoncalves/biblio-api'
  isAuth$ = new BehaviorSubject(true);
  private readonly http = inject(HttpClient);

  constructor() { }

  login(credentials: {email:string, password: string}){
    return this.http.get(`${this.url}/books`).pipe(
      tap( () => this.isAuth$.next(true))
    )
  }

  logout(){
    return this.http.get(`${this.url}/books`).pipe(
      tap( () => this.isAuth$.next(false))
    )
  }

  getToken(){
    return 'b9d5f18e-cf29-4cba-893c-0320b3a65572';
  }
}
