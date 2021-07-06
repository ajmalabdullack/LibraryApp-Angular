import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author={
    author:"",
    books:"",
    language:"",
    image:""
  }

  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.authorService.getauthor(authorId).subscribe((data)=>{
      this.author=JSON.parse(JSON.stringify(data));
  })
  }

}
