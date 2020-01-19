import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  public productid
  public response

  public product:any
  private obj:any
  private listSubs: Subscription

  

  constructor(private _route: ActivatedRoute,private Auth:AuthService,private Toastr:ToastrService,private router: Router) { }

  ngOnInit() {
    //console.log(this._route.snapshot.queryParams.id)
    //pass product id
    this.productid=this._route.snapshot.queryParams.id
    this.Auth.productdetail(this.productid)
    //end


    this.listSubs = this.Auth.cast6Listener()
    .subscribe(data => {
      this.product = data;
     console.log("single pro"+this.product)
     this.obj = JSON.parse(this.product);

    })
    this.obj=JSON.parse(this.product)
    console.log("pro3"+this.obj)
  }
  validate(event)
  {
    if(sessionStorage.getItem('email') == null)
    {
      this.Toastr.error("Please Login First")
      this.router.navigate(['/login'])
      
    }
    else
    {
      event.preventDefault()
      const target = event.target
      const qty = target.querySelector('#sst').value
      const price=target.querySelector('#price').value
      this.Auth.cartadd(this.productid,sessionStorage.getItem('email'),qty,price)
    }
  }
  }
