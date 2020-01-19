import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }
  loginUser(event) {
    event.preventDefault()
    console.log(event)
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    this.Auth.loginuser(email, password)
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
