import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './shared/guards/auth-guard';
import { BooksService } from './services/books.service';
import { routes as booksRoutes } from './components/books/books.routes';

export const routes: Routes = [
    {
        path: 'home', canActivate: [authGuard], component: HomeComponent
    },
    {path:'books', 
        canActivate: [authGuard],
        providers: [BooksService],
        children:booksRoutes,
    },
    {path: 'contacts', component: ContactsComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'login'}
];
