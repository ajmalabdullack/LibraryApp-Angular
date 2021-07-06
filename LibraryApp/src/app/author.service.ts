import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {


  item={
    author:"",
    books:"",
    language:"",
    image:""
  }

  constructor(private http:HttpClient) { }

  getauthor(id:any){
    return this.http.get("http://localhost:4000/author/"+id);
  }
  
  newAuthor(item:any){
    return this.http.post("http://localhost:4000/authorinsert",{"author":item})
    .subscribe(data =>{console.log(data)})

  }

  getauthors(){
    return this.http.get("http://localhost:4000/authors");
  }
  deleteauthor(id:any)
  {

    return this.http.delete("http://localhost:4000/authorremove/"+id)

  }

  editAuthor(author:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:4000/authorupdate",author)
    .subscribe(data =>{console.log(data)})
  }
}
