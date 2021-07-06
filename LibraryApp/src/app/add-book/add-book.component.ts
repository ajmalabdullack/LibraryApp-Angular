import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService:BookService, private router:Router) { }

  bookItem={
    title:"",
    author:"",
    genre:"",
    image:""
  }

  ngOnInit(): void {
  }
  AddBook(){
    this.bookService.newBook(this.bookItem);
    console.log("called");
    alert("success")
    this.router.navigate(['books'])
  }

}
