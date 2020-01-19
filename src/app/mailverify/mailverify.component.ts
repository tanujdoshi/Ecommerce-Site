import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mailverify',
  templateUrl: './mailverify.component.html',
  styleUrls: ['./mailverify.component.css']
})
export class MailverifyComponent implements OnInit {
  public otp
  constructor(public Auth:AuthService,private Toastr: ToastrService) {
    //debugger;
    this.otp=Auth.getpin();
    console.log("otp by verify component:"+this.otp[0])
   }

  ngOnInit() {
  }
  verify(event) {
    event.preventDefault()
    console.log(event)
    const target = event.target
    const pinbyuser = target.querySelector('#otp').value
    if(pinbyuser == this.otp[0])
    {
      this.Toastr.success("Redirecting You to Login page","Otp matched")
      this.Auth.registerverifyuser(this.otp[1],this.otp[2],this.otp[3],this.otp[4],this.otp[5])

    }
    else
    {
      this.Toastr.warning("otp is not match","Error")
    }
  }
}
