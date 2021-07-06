import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class BookService {

  item={
    title:"",
    author:"",
    genre:"",
    image:""
  }

  constructor(private http:HttpClient) { }

  getbook(id:any){
    return this.http.get("http://localhost:4000/"+id);
  }

  newBook(item:any){
    return this.http.post("http://localhost:4000/insert",{"book":item})
    .subscribe(data =>{console.log(data)})
  }

  getbooks(){
    return this.http.get("http://localhost:4000/books");
  }
  deletebook(id:any)
  {

    return this.http.delete("http://localhost:4000/remove/"+id)
    

  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:4000/update",book)
    .subscribe(data =>{console.log(data)})
  }
  
}
