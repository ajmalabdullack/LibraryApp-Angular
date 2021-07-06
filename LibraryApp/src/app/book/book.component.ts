import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book={
    title:"",
    author:"",
    genre:"",
    image:""
  }


  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookService.getbook(bookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }

}
