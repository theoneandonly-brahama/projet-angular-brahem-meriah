import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { map } from 'rxjs/operators'
import { CommentService } from './comment.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dbPathp = 'Produits';
  productref: AngularFirestoreCollection<Product>;
  
  prodlist: Product[];

  constructor(private crud: AngularFirestore, private comms:CommentService) {
    this.productref = crud.collection(this.dbPathp);

   }

  getall():Product[] {
    this.retrieveProds()
    return this.prodlist
    
   }

   retrieveProds(): void{
    this.productref.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      
      this.prodlist=data;
    });
    
  }

  getproduct(id:String){
    for(let p of this.prodlist){
      if(id==p.id){
        p.comments=this.comms.getProductComms(p.id)
        return p;
      }
    }
    return undefined
  }

  delete(id: string): Promise<void> {
    return this.productref.doc(id).delete();
  }
  create(tutorial: Product): any {
    console.log('works---')
    return this.productref.add({ ...tutorial });
    
  }

  update(id: string, data: any): Promise<void> {
    return this.productref.doc(id).update(data);
  }
}
