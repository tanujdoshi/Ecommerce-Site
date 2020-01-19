import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private _route: ActivatedRoute,private Auth:AuthService,private Toastr:ToastrService,private router: Router) { }

  ngOnInit() {
  }
  add(event)
  {
    event.preventDefault()
    const target = event.target
    var errorList=[]
    console.log("button clicked")
    const name = target.querySelector('#name').value
    const price = target.querySelector('#price').value
    const category = target.querySelector('#category').value
    const stock = target.querySelector('#stock').value
    const img = target.querySelector('#img').value
    const desc = target.querySelector('#description').value
    this.Auth.add(name,price,category,stock,img,desc)
  }

}
