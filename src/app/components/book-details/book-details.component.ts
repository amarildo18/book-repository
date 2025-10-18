import { Component, inject } from '@angular/core';
import { Book } from '../../shared/models/data-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
   book = inject(ActivatedRoute).snapshot.data['employee'] as Book
}
