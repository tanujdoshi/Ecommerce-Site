  import { Injectable, TestabilityRegistry } from '@angular/core';
  import {HttpClient} from '@angular/common/http';
  import { Router } from '@angular/router';
  import {ToastrService} from 'ngx-toastr';
  
import { BehaviorSubject, Subject } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })

  
  export class AuthService {

    constructor(private http:HttpClient, private router: Router,private Toastr: ToastrService) { }

    public email;

    private isLogged=new BehaviorSubject<boolean>(false)
    public cast=this.isLogged.asObservable();
//search

// };
//     if(response.isSucceed){
//       this.Toastr.success("Item Successfully added to cart","Added")
//       this.router.navigate(['/cart'])

//     }
//     if(response.already){
//       this.Toastr.error("Selected Item is Already in Cart","Found duplicate")
//     }

//   })}


//end search
//add to cart
cartadd(productid1,userid,qty,price){ 
  this.http.post("http://localhost:8000/addtocart",{productid1,userid,qty,price})
  .subscribe( (response: any) => {
    if(response.isSucceed){
      this.Toastr.success("Item Successfully added to cart","Added")
      this.router.navigate(['/cart'])

    }
    if(response.already){
      this.Toastr.error("Selected Item is Already in Cart","Found duplicate")
    }

  })}

//end of add 
//end of searching
//take cart detail

public items:any
public qty:any
private cc = new Subject<any>()
private qcc = new Subject<any>()
cast7Listener() {
  return this.cc.asObservable();
}
cast8Listener() {
  return this.qcc.asObservable();
}
get citem(){
  //this.takecart()
  return this.items
}
get qqty(){
  //this.takecart()
  return this.qty
}
changecart(items:any)
{
 // console.log('auth changep')
  this.cc.next(items)
}
takecart(useroid){
  this.http.post("http://localhost:8000/takecart",{useroid})
  .subscribe( (response: any) => {
      this.items=JSON.stringify(response.cproducts)
      this.qty=JSON.stringify(response.pcount)
      this.cc.next(this.items)
      this.qcc.next(this.qty)
   });
   //console.log("items of customer"+this.items)
   //console.log("quantity"+this.qty)
  }

  
//end cart detail
    
 //get products
      private listprodut = new Subject<any>()
      //public cast2=this.listprodut.asObservable();
      public productlist:any

      cast2Listener() {
        return this.listprodut.asObservable();
      }
      changeProduct(product:any)
      {
        console.log('auth changep')
        this.listprodut.next(product)
      }
      getproductlist(){
        this.test()
        console.log("get method"+this.productlist)
        return this.productlist
      }
      test(){
        this.http.get("http://localhost:8000/product").subscribe((res: any)=>{
        //  console.log("product list:"+JSON.stringify(res.list))
          this.productlist=JSON.stringify(res.list)
          this.listprodut.next(this.productlist)
          console.log("product list by auth method:"+this.productlist)

        })
        console.log("app start")
      }
 //end of get products
//fashion product list

private listfashionprodut = new Subject<any>()
      //public cast2=this.listprodut.asObservable();
      public fashionproductlist:any

      cast3Listener() {
        return this.listfashionprodut.asObservable();
      }
      changefashionProduct(product:any)
      {
        console.log('auth changep')
        this.listfashionprodut.next(product)
      }
      getfashionproductlist(){
        this.fashionproduct()
        console.log("get method"+this.productlist)
        return this.fashionproductlist
      }
      fashionproduct(){
        this.http.get("http://localhost:8000/fashionproduct").subscribe((res: any)=>{
        //  console.log("product list:"+JSON.stringify(res.list))
          this.fashionproductlist=JSON.stringify(res.fashionlist)
          this.listfashionprodut.next(this.fashionproductlist)
          console.log("product list by fashion auth method:"+this.fashionproductlist)

        })
        console.log("app start")
      }
//end of fashion product list

//electro product list
private listelectrprodut = new Subject<any>()
      //public cast2=this.listprodut.asObservable();
      public electroproductlist:any

      cast4Listener() {
        return this.listelectrprodut.asObservable();
      }
      changeelectroProduct(product:any)
      {
        console.log('auth changep')
        this.listelectrprodut.next(product)
      }
      getelectroproductlist(){
        this.electroproduct()
        console.log("get method"+this.electroproductlist)
        return this.electroproductlist
      }
      electroproduct(){
        this.http.get("http://localhost:8000/electroproduct").subscribe((res: any)=>{
        //  console.log("product list:"+JSON.stringify(res.list))
          this.electroproductlist=JSON.stringify(res.electrolist)
          this.listelectrprodut.next(this.electroproductlist)
          console.log("product list by fashion auth method:"+this.electroproductlist)

        })
        console.log("app start")
      }

//end of electro product
private listelectrprodutt = new Subject<any>()
      //public cast2=this.listprodut.asObservable();
      public electroproductlistt:any

      changeelectroProductt(search:any)
      {
      //  console.log('auth changep')
        this.listelectrprodutt.next(search)
      }
      getelectroproductlistt(){
        return this.electroproductlistt
      }
cast9Listener() {
  return this.listelectrprodutt.asObservable();
}
searchkey(search){ 
  console.log("search value"+search)
  this.http.post("http://localhost:8000/search",{search})
  .subscribe( (response: any) => {
    this.electroproductlistt=JSON.stringify(response.sp)
    this.listelectrprodutt.next(this.electroproductlistt)
  //  console.log("search===."+this.dd)


  })
}
//footwear products
      private listfootprodut = new Subject<any>()
      public footproductlist:any

      cast5Listener() {
        return this.listfootprodut.asObservable();
      }
      changeelfootProduct(product:any)
      {
        console.log('auth changep')
        this.listfootprodut.next(product)
      }
      getelfootlist(){
        this.footproduct()
        console.log("get method"+this.footproductlist)
        return this.footproductlist
      }
      footproduct(){
        this.http.get("http://localhost:8000/footproduct").subscribe((res: any)=>{
        //  console.log("product list:"+JSON.stringify(res.list))
          this.footproductlist=JSON.stringify(res.footlist)
          this.listfootprodut.next(this.footproductlist)
          console.log("product list by fashion auth method:"+this.footproductlist)

        })
        console.log("app start")
      }


//end of footwear products


//product details
private productsingle = new Subject<any>()
public singleproduct:any
cast6Listener() {
  return this.productsingle.asObservable();
}
getdetail(){
  return this.singleproduct
}
changeelsingleProduct(product:any)
      {
        console.log('auth changep')
        this.productsingle.next(product)
      }
productdetail(productid)
{
  console.log("product id from service"+productid)
  this.http.post("http://localhost:8000/productdetail",{productid}).subscribe((res: any)=>{
    this.singleproduct=JSON.stringify(res.productdetail)
    this.productsingle.next(this.singleproduct)
    //console.log("single product data:"+this.singleproduct)
    if(res.notfound){
      this.Toastr.error("product not found")
    }

})

}


//end of product details

    getemail() {
      return this.email
    }
  
//login user
    islogged():boolean{
      return sessionStorage.getItem('email') != null

    }
    loginuser(email,password){ 
      this.http.post("http://localhost:8000/login",{email,password}).subscribe((res: any)=>{
      //  console.log("my response"+res)
        //console.log("my response"+res.isLogin)
        if(res.isLogin) {
          ///console.log(res.userd)
          //console.log("email from service:"+res.userd['email'])
          this.email=sessionStorage.setItem('email',res.userd['email'])
            this.isLogged.next(true)
          console.log("session storage"+email)
          this.Toastr.success('Logging You In','Correct');
          this.router.navigate(['']);
        }
        if(!res.isLogin) {
          this.Toastr.error('Invalid login credentials','Error');
//          console.log('Error');
        }
    }
      )}
//end of login user

//admin login
private authsub=new Subject<boolean>()
public asess
onlogn()
{
  return this.authsub.asObservable()
  
}
adminlogib(email,password){ 
  this.http.post("http://localhost:8000/adminlogin",{email,password}).subscribe((res: any)=>{
  console.log("my response"+res)
    //console.log("my response"+res.isLogin)
  //  console
    if(res.isLogin) {
      ///console.log(res.userd)
      //console.log("email from service:"+res.userd['email'])
      sessionStorage.setItem('admin',res.userd['email'])
      this.authsub.next(true)
      this.Toastr.success('Logging You In','Correct');
      this.router.navigate(['productdetail']);
    }
    if(!res.isLogin) {
      this.Toastr.error('Invalid login credentials','Error');
//          console.log('Error');
    }
}
  )}
//end




      //mail verify
      private pin =[]
      getpin() {
        return this.pin
      }
      
      registeruser(fname,lname,email,password,cpassword){ 
        this.http.post("http://localhost:8000/register",{fname,lname,email,password,cpassword})
        .subscribe( (response: any) => {
          if(response.emailregister)
          {
            this.Toastr.error('email already Registered','Error');

          }
          if(response.isSucceed) {
            console.log("mail sent")
            this.Toastr.success('Mail Sent Redirecting You To Verification pafe','success');
            this.pin[0]=response.otp
            this.pin[1]=fname
            this.pin[2]=lname
            this.pin[3]=email
            this.pin[4]=password
            console.log(this.pin)
            this.router.navigate(['/verify'])
            
          }
          if(!response.isSucceed) {
            console.log("mail cant send")
            this.Toastr.error("Error mail not sent!!",'error')
          }
        })
      }
//mail free logout
      logUserOut(status)
      {
        this.isLogged.next(status)
      }
      registerverifyuser(fname,lname,email,password,cpassword){ 
        this.http.post("http://localhost:8000/registerverify",{fname,lname,email,password,cpassword})
        .subscribe( (response: any) => {
          
          if(response.isSucceed) {
            console.log("mail sent")
            this.Toastr.success('You have successfully registered','Congratulations');
            this.router.navigate(['/login'])
            
          }
          if(!response.isSucceed) {
            console.log("Something Went Wrong")
            this.Toastr.error("Something Went wrong",'error')
          }
        })
      }
      //end of register

      //delete product
      deletproduct(id){
        console.log("In delete")
        this.http.post("http://localhost:8000/delete",{id})
        .subscribe( (response: any) => {
          if(response.already){
            this.Toastr.success("Data Deleted successfullt")
            this.router.navigate(['productdetail'])
          }
          else
          {
            this.Toastr.error("Something went wrong")
          }

      })
    }
    //edit
    edit(id,name,price,category,stock,img,desc){
      this.http.put("http://localhost:8000/edit",{id,name,price,category,stock,img,desc})
      .subscribe( (response: any) => {
        if(response.updated)
        {
          this.Toastr.success("Data has Been updated")
          this.router.navigate(['productdetail'])
        }
        else
        {
          this.Toastr.error("Something went wrong")
        }

    })
  }
      //end
      add(name,price,category,stock,img,desc){
        this.http.post("http://localhost:8000/add",{name,price,category,stock,img,desc})
        .subscribe( (response: any) => {
          if(response.add)
          {
            this.Toastr.success("Product added successfully")
            this.router.navigate(['productdetail'])
          }
          else
          {
            this.Toastr.error("Something went wrong")
          }
  
      })
    }
    deletecart(pid,uid){
      console.log("In delete")
      this.http.post("http://localhost:8000/deletecart",{pid,uid})
      .subscribe( (response: any) => {
        if(response.already){
          this.Toastr.success("product deleted from cart")
          this.router.navigate(['cart'])
        }
        else
        {
          this.Toastr.error("Something went wrong")
        }

    })
  }
  order(uid){
    //console.log("In delete")
    this.http.post("http://localhost:8000/order",{uid})
    .subscribe( (response: any) => {})
}
  
  }