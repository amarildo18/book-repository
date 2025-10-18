
import { booksDetailsResolver } from "../../shared/resolvers/employee-details-resolver";
import { BookCreateComponent } from "../book-create/book-create.component";
import { BookDetailsComponent } from "../book-details/book-details.component";
import { BookEditComponent } from "../book-edit/book-edit.component";
import { BooksComponent } from "./books.component";


export const routes = [
    {path:'', component: BooksComponent},
    {
        path:'details/:id', 
        resolve: {employee: booksDetailsResolver},
        component: BookDetailsComponent
    },
    {path:'create', component: BookCreateComponent},
    {path:'edit', component: BookEditComponent},
]