import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {

  authorItem={
    author:"",
    books:"",
    language:"",
    image:""
  }

  constructor(private router:Router,private authorService:AuthorService) { }

  ngOnInit(): void {
    let authorId = localStorage.getItem("editAuthorId");
    this.authorService.getauthor(authorId).subscribe((data)=>{
      this.authorItem=JSON.parse(JSON.stringify(data));
  })
  }

  editAuthor()
  {    
    this.authorService.editAuthor(this.authorItem);   
    alert("Success");
    this.router.navigate(['authors']);
  }

}
