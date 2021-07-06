import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { TokenInterceptorService } from './token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BooksComponent,
    AuthorsComponent,
    AddBookComponent,
    AddAuthorComponent,
    SignupComponent,
    LoginComponent,
    UpdatebookComponent,
    UpdateauthorComponent,
    BookComponent,
    AuthorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
