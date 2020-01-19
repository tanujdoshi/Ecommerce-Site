import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
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
 


}
