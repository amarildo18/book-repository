import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../shared/models/data-type';
import { BooksService } from '../../services/books.service';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-books',
  imports: [RouterLink, NgFor],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  bookService = inject(BooksService);
  books$ : Observable<Book[]> = this.bookService.getBooks();
  books: Book[] = [];
  allBooks: Book[] = [];

  ngOnInit(): void {
    this.books$.subscribe(response => {
      if(response){
        this.books = response;
        this.allBooks = response;
      }
    })
  }

  filterBooks(code: number){

    switch(code){
      case 1: this.books = this.allBooks;
        break;
      case 2: 
        this.books = this.allBooks;
        this.books = this.books.filter(x => x.alreadyRead);
        break;
      case 3: 
        this.books = this.allBooks;
        this.books = this.books.filter(x => !x.alreadyRead);
        break;
    }
  }

  delete(id: number){
    this.books = this.books.filter(x => x.id != id);
  }
}
