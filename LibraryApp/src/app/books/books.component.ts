import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books=[{
    title:"",
    author:"",
    genre:"",
    image:""
  }]

  constructor(private router:Router,private bookService:BookService,public auth:AuthService) { }

  ngOnInit(): void {
    this.bookService.getbooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }

  deleteBook(book:any)
  {
    this.bookService.deletebook(book._id)
      .subscribe((data) => {
        this.books = this.books.filter(p => p !== book);
        
      })
  }

  editBook(book:any)
  {
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['updatebook']);

  }

  Readmore(book:any){
    localStorage.setItem("editBookId", book._id.toString());
    this.router.navigate(['book']);
  }

}
