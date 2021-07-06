import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  logoutUser()
{
localStorage.removeItem('token')
this.router.navigate([''])
}
loggedUser()
{
  this.router.navigate(['/'])
}

}
