import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {ToastrService} from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public product:any
  private obj:any
  private listSubs: Subscription
  constructor(public Auth:AuthService,private Toastr: ToastrService) {
    //debugger;

    //this.product
    //console.log("Product List by home:"+this.product)
   // if(this.product)
    //this.obj=JSON.parse(this.product)
  }
  addProduct()
  {
    console.log("add product")
    this.Auth.changeProduct({name:'Changed'})
  }
  ngOnInit() {
    this.Auth.test()
    this.listSubs = this.Auth.cast2Listener()
    .subscribe(data => {
      this.product = data;
     // console.log("pro"+this.product)
     this.obj = JSON.parse(this.product);

    })
    this.obj=JSON.parse(this.product)
    console.log("pro3"+this.obj)

  }
  ico(id:string,price:string){
    if(sessionStorage.getItem('email') == null)
    {
      this.Toastr.warning("Please Login First")
    }
    else
    {
      const qty=1
      this.Auth.cartadd(id,sessionStorage.getItem('email'),qty,price)
      //this.Toastr.success("added to cart")
    }
    
  }

}
