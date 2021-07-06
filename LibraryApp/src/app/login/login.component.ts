import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:"",
    password:""
  }

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.auth.loginUser(this.user)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this.router.navigate([""])
      },
      err => {
        console.log(err);
        this.router.navigate(["/login"])
      }
    )
  }

}
