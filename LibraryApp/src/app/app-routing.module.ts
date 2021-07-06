import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AuthGuard } from './auth.guard';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';

import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"books",component:BooksComponent},
  {path:"authors",component:AuthorsComponent},
  {path:"addBook",canActivate:[AuthGuard],component:AddBookComponent},
  {path:"addAuthor",canActivate:[AuthGuard],component:AddAuthorComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"updatebook",component:UpdatebookComponent},
  {path:"updateauthor",component:UpdateauthorComponent},
  {path:"book",component:BookComponent},
  {path:"author",component:AuthorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
