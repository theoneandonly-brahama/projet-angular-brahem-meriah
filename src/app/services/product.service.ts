import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Product } from '../models/product';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productlist: Product[];
  currrentproduct?:Product;
  currentIndex = -1;
  title = '';

  constructor(public crud:FirebaseService) {
    
    
    
   }

    getall(){
    this.retrieveProds();
    
    console.log(this.productlist)
    return this.productlist
    
   }

  refreshList(): void {
    this.currrentproduct = undefined;
    this.currentIndex = -1;
    this.retrieveProds();
  }

  retrieveProds(): void {
    this.crud.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      
      this.productlist = data;
    });
    console.log(this.productlist)
  }

  setActiveprod(prod: Product, index: number): void {
    this.currrentproduct = prod;
    this.currentIndex = index;
  }
}
