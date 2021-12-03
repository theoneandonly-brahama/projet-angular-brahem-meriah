import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { delay, map } from 'rxjs/operators';
import { Compte } from '../models/compte';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {

  acountlist: Compte[];
  currentaccount:Compte;

  isadmin:boolean;

  

  constructor(private crud: FirebaseService) {
    this.retrieveAccounts();
  }

  
  
  retrieveAccounts():  void {
    this.crud.getAcc().snapshotChanges().pipe(
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
