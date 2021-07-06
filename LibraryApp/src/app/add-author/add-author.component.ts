import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorModel } from '../authors/author.model';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  constructor(private authorService:AuthorService,private router:Router) { }

  authorItem={
    author:"",
    books:"",
    language:"",
    image:""
  }

 
  ngOnInit(): void {
  }
  AddAuthor(){
    this.authorService.newAuthor(this.authorItem);
    console.log("called");
    alert("success")
    this.router.navigate(['authors'])
  }
 

}
