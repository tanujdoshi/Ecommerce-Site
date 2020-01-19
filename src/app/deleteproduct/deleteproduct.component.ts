import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  public id
  constructor(private _route: ActivatedRoute,public Auth:AuthService) { }

  ngOnInit() {
    this.id=this._route.snapshot.queryParams.id
    this.Auth.deletproduct(this.id)
  }

}
