import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors=[{
    author:"",
    books:"",
    language:"",
    image:""
  }]

  constructor(private router:Router,private authorService:AuthorService,public auth:AuthService) { }

  ngOnInit(): void {
    this.authorService.getauthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
    })
  }
  deleteAuthor(author:any)
  {
    this.authorService.deleteauthor(author._id)
      .subscribe((data) => {
        this.authors = this.authors.filter(p => p !== author);
       
      })
  }

  editAuthor(author:any)
  {
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['updateauthor']);

  }

  Readmore(author:any){
    localStorage.setItem("editAuthorId", author._id.toString());
    this.router.navigate(['author']);
  }

}
