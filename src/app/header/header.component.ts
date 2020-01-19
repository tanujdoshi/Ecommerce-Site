import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public user=''
  public adminlog:Subscription
  public adminstatus=false
  public adminstatus1=false
  public islogged=false
  constructor(private Auth:AuthService,private router:Router) {
    this.user=sessionStorage.getItem('email')
    if(sessionStorage.getItem('admin')){
      this.adminstatus1=true
    }

   }

   status=this.Auth.islogged()
  ngOnInit() {

    this.user=sessionStorage.getItem('email')
    console.log("session"+this.user)
   this.Auth.cast.subscribe(status=>this.islogged=status)
   if(this.user!=null)
   {
    this.Auth.logUserOut(true)
   }


   this.adminlog=this.Auth.onlogn().subscribe(data=>this.adminstatus=data)
  // sessionStorage.clear()
  }
  search(event)
  {
    event.preventDefault()
    const target = event.target
    const qty = target.querySelector('#search').value
    this.router.navigate(['/search'], { queryParams: { page: qty } }); 
    console.log("search"+qty)
  }
  adminlogout(event){
    sessionStorage.removeItem('admin')
    this.adminstatus=false
    this.adminstatus1=false
    this.router.navigate([''])
  }
 
}
