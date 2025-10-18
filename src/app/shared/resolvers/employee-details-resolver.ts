import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../models/data-type';

export const booksDetailsResolver: ResolveFn<Book> = (route, state) => {
  const bookService = inject(BooksService);
  const id = +(route.paramMap.get('id') ?? 0) 

  return bookService.getBookById(id);
};
