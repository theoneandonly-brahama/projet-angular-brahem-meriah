import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Compte } from '../models/compte';


@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

  acountlist: Compte[];
  currentaccount:Compte;

  private dbPatha='Comptes'
  accountref: AngularFirestoreCollection<Compte>;
  isadmin:boolean;

  constructor(private db: AngularFirestore) {
    this.accountref = db.collection(this.dbPatha);
    this.retrieveAccounts();
  }

  retrieveAccounts():  void {
    this.accountref.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      
      this.acountlist = data;
    });
    
  }
}
