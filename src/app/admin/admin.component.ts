import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
  loginUser(event) {
    event.preventDefault()
    //console.log(event)
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    console.log(email+password)
    this.Auth.adminlogib(email, password)
    /*

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.success) {
        this.router.navigate(['admin'])
        this.Auth.setLoggedIn(true)
      } else {
        window.alert(data.message)
      }
    })
  */  }
}
