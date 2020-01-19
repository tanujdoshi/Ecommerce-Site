import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {RegisterComponent} from'./register/register.component';
import {LoginComponent} from './login/login.component';
import {SingleComponent} from './single/single.component';
import {TestComponent} from './test/test.component';
import {MailverifyComponent} from './mailverify/mailverify.component';
import {LogoutComponent} from './logout/logout.component';
import {ElectroComponent} from './electro/electro.component';
import {FootwearComponent} from './footwear/footwear.component';
import {SearchComponent} from './search/search.component';
import {AdminComponent} from './admin/admin.component' ;
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {DeleteproductComponent} from './deleteproduct/deleteproduct.component';
import {EditproductComponent} from './editproduct/editproduct.component';
import {AddproductComponent} from './addproduct/addproduct.component';
import {UserdetailComponent} from './userdetail/userdetail.component';
import {DeletecartComponent} from './deletecart/deletecart.component';
import {OrdersComponent} from './orders/orders.component'
const routes: Routes = [
  {path: 'category', component: CategoryComponent},
  {path: 'cart', component: CartComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'test', component: TestComponent},
  {path: 'verify',component:MailverifyComponent},
  {path: 'logout',component:LogoutComponent},
  {path: 'single',component:SingleComponent},
  {path: 'electro',component:ElectroComponent},
  {path: 'footwear',component:FootwearComponent},
  {path: 'single/:id',component:SingleComponent},
  {path: 'search',component:SearchComponent},
  {path: 'search/:id',component:SearchComponent},
  {path: 'admin',component:AdminComponent},
  {path: 'productdetail',component:ProductdetailComponent},
  {path: 'delete',component:DeleteproductComponent},
  {path: 'editproduct',component:EditproductComponent},
  {path: 'addproduct',component:AddproductComponent},
  {path: 'userdetail',component:UserdetailComponent},
  {path: 'editproduct/:id/:name/:price/:category/:stock/:img1/:desription',component:EditproductComponent},
  {path: 'deletecart/:id',component:DeletecartComponent},
  {path: 'deletecart',component:DeletecartComponent},
  {path: 'order',component:OrdersComponent},
  {path : '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
