import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../shared/models/data-type';
import { BooksService } from '../../services/books.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgComponentOutlet, NgFor } from '@angular/common';

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
  selectedId = -1;

  //isConfirmationOpen = false;
  //confirmDialog : any;

  /*
  async showConfimationDialog(id: number){
    const {ConfirmationDialog} = await import('../../shared/components/confirmation-dialog/confirmation-dialog');
    this.confirmDialog = ConfirmationDialog;
    this.isConfirmationOpen = true;
    this.selectedId = id;

  }*/

  ngOnInit(): void {
    this.books$.subscribe(response => {
      if(response){
        this.books = response;
      }
    })
  }

  delete(id: number){

    console.log('quer deletar');
    this.books = this.books.filter(x => x.id != id);
  }
}
