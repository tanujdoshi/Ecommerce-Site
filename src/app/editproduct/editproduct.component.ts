import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  public id
  public name
  public price
  public category
  public stock
  public img
  public description
  constructor(private _route: ActivatedRoute,private Auth:AuthService,private Toastr:ToastrService,private router: Router) { }

  ngOnInit() {
    this.id=this._route.snapshot.queryParams.id
    this.name=this._route.snapshot.queryParams.name
    this.price=this._route.snapshot.queryParams.price
    this.category=this._route.snapshot.queryParams.category
    this.stock=this._route.snapshot.queryParams.stock
    this.img=this._route.snapshot.queryParams.img1
    this.description=this._route.snapshot.queryParams.description

  }
  edit(event)
  {
    event.preventDefault()
    const target = event.target
    var errorList=[]
    //console.log("button clicked")
    const id = target.querySelector('#id').value
    const name = target.querySelector('#name').value
    const price = target.querySelector('#price').value
    const category = target.querySelector('#category').value
    const stock = target.querySelector('#stock').value
    const img = target.querySelector('#img').value
    const desc = target.querySelector('#description').value
    this.Auth.edit(id,name,price,category,stock,img,desc)
  }

}
