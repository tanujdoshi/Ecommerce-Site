import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-electro',
  templateUrl: './electro.component.html',
  styleUrls: ['./electro.component.css']
})
export class ElectroComponent implements OnInit {
  public product:any
  private obj:any
  private listSubs: Subscription

  constructor(private Auth:AuthService,private Toastr: ToastrService) { }

  ngOnInit() {
    this.Auth.electroproduct()

    this.listSubs = this.Auth.cast4Listener()
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
