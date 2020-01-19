import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Auth: AuthService,private toastr:ToastrService) { }


  ngOnInit() {
  }
  registerevent(event) {
    event.preventDefault()
    const target = event.target
    var errorList=[]
    //console.log("button clicked")
    const fname = target.querySelector('#fname').value
    const lname = target.querySelector('#lname').value
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    const cpassword = target.querySelector('#cpassword').value
    
    if(password!=cpassword)
    {
        this.toastr.error("Passwords must match")
        errorList.push(['Password error'])
    }
    if(errorList.length===0)
      this.Auth.registeruser(fname,lname,email, password,cpassword)

   
  /*  console.log(event)
    const target = event.target
     const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    this.Auth.registeruser(email, password)*/
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
