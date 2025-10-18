import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../shared/models/data-type';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

   private readonly api = 'https://my-json-server.typicode.com/JoaoGoncalves/biblio-api';
  
  constructor(private readonly http: HttpClient){}

  getBooks(){
    return this.http.get<Book[]>(`${this.api}/books`);
  }

  getBookById(id:number){
    return this.http.get<Book>(`${this.api}/books/${id}`)
  }
}
