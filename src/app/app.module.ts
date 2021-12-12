import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/';
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagementComponent } from './components/management/management.component';
import { LoginComponent } from './components/login/login.component';
import { AddminlistComponent } from './components/addminlist/addminlist.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductlistComponent,
    ProductdetailComponent,
    ErrorComponent,
    ContactComponent,
    AddproductComponent,
    ManagementComponent,
    LoginComponent,
    AddminlistComponent,
    UpdateproductComponent,
    FilterPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
