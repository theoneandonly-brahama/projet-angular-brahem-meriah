import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Compte } from '../models/compte';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbPathp = 'Produits';
  private dbPatha='Comptes'

  productref: AngularFirestoreCollection<Product>;
  accountref: AngularFirestoreCollection<Compte>;

  constructor(private db: AngularFirestore) {
    this.productref = db.collection(this.dbPathp);
    this.accountref = db.collection(this.dbPatha);
  }

  getAll(): AngularFirestoreCollection<Product> {
    
    return this.productref;
    
  }

  getAcc(): AngularFirestoreCollection<Compte> {
    
    return this.accountref;
    
  }

  create(tutorial: 
    Product): any {
    console.log('works---')
    return this.productref.add({ ...tutorial });
    
  }

  update(id: string, data: any): Promise<void> {
    return this.productref.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.productref.doc(id).delete();
  }
}
