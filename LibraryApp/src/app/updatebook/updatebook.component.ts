import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  bookItem={
    title:"",
    author:"",
    genre:"",
    image:""
  }

  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookService.getbook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }

  editBook()
  {    
    this.bookService.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['books']);
  }
  

}
