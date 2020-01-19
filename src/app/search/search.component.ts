import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public search
  public searchresult:any
  public objj:any
  private listSubs: Subscription
  constructor(private _route: ActivatedRoute,private Auth:AuthService,private Toastr:ToastrService,private router: Router) { }

  ngOnInit() {
    this.search=this._route.snapshot.queryParams.page
    console.log("ss s"+this.search)
    this.Auth.searchkey(this.search)

    this.listSubs = this.Auth.cast9Listener()
    .subscribe(data => {
      this.searchresult = data;
     
     this.objj = JSON.parse(this.searchresult);
     console.log("pro"+this.objj)

    })
    this.objj = JSON.parse(this.searchresult);



  }

}
