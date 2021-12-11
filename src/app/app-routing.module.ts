import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddminlistComponent } from './components/addminlist/addminlist.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ContactComponent } from './components/contact/contact.component';

import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ManagementComponent } from './components/management/management.component';
import { ProductdetailComponent } from './components/productdetail/productdetail.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { AdminguardGuard } from './guards/adminguard.guard';

const routes: Routes = [
  {path:'produits', component:ProductlistComponent},
  {path:'management', component:ManagementComponent,children:[
    {path:'add', component:AddproductComponent},
    {path:'list', component:AddminlistComponent},
    {path:'list/:id', component:UpdateproductComponent},
    {path:'', redirectTo:'list', pathMatch:'full'}
  ], canActivate:[AdminguardGuard]},
  {path:'contact', component:ContactComponent},
  {path:'produits/:id', component:ProductdetailComponent},
  {path:'', redirectTo:'produits', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'**', component:ErrorComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
