import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public product:any
  public qty:any
  private obj:any
  private obj1:any=[]
  private listSubs: Subscription
  public mpid
  public  a:any
  constructor(private Auth:AuthService) { }

  ngOnInit() {
    console.log("In cart")
    this.Auth.takecart(sessionStorage.getItem('email'))

    this.listSubs = this.Auth.cast7Listener()
    .subscribe(data => {
      this.product = data;
     // console.log("pro"+this.product)
     this.obj = JSON.parse(this.product);
     this.a=JSON.parse(this.obj1)
     console.log("mmithhu"+this.a)
    })

    this.listSubs = this.Auth.cast8Listener()
    .subscribe(data => {
      this.qty = data;
     console.log("pro"+data)
     this.obj1 = JSON.parse(this.qty);
     

    })
  //console.log("mithu "+this.a)

    // for(let i=0;i<this.obj.length;i++)
    // {
      
    //   // this.a.push(this.obj[i])
    // }
    // this.obj=JSON.parse(this.product)
    // this.obj1=JSON.parse(this.qty)
    //console.log("pro3"+this.obj)
    
    // console.log("mithu"+this.a)
  }
  order(event){

    this.Auth.order(sessionStorage.getItem('email'))
  }

}
