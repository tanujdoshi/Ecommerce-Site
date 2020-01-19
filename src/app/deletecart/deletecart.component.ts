import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-deletecart',
  templateUrl: './deletecart.component.html',
  styleUrls: ['./deletecart.component.css']
})
export class DeletecartComponent implements OnInit {
  public id
  constructor(private _route: ActivatedRoute,public Auth:AuthService) { }

  ngOnInit() {
    this.id=this._route.snapshot.queryParams.id
    this.Auth.deletecart(this.id,sessionStorage.getItem('email'))
  }

}
