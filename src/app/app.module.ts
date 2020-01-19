import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SingleComponent } from './single/single.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { MailverifyComponent } from './mailverify/mailverify.component';
import { LogoutComponent } from './logout/logout.component';
import { ElectroComponent } from './electro/electro.component';
import { FootwearComponent } from './footwear/footwear.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { DeletecartComponent } from './deletecart/deletecart.component';
import { OrdersComponent } from './orders/orders.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingleComponent,
    HomeComponent,
    FooterComponent,
    CategoryComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    TestComponent,
    MailverifyComponent,
    LogoutComponent,
    ElectroComponent,
    FootwearComponent,
    SearchComponent,
    AdminComponent,
    ProductdetailComponent,
    EditproductComponent,
    DeleteproductComponent,
    AddproductComponent,
    UserdetailComponent,
    DeletecartComponent,
    OrdersComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   ToastrModule.forRoot({
     timeOut:2000,
     positionClass:'toast-top-right',
     preventDuplicates:false
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
