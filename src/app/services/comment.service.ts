import { Injectable } from '@angular/core';
import { Commentaire } from '../models/commentaire';

import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments:Commentaire[]
  filteredcomms:Commentaire[]=[]
  private dbPathC='Commentaires'

  commentref: AngularFirestoreCollection<Commentaire>;

  constructor(private db:AngularFirestore) { 
    this.commentref = db.collection(this.dbPathC);
    this.retrieveComms();
    

  }

  create(comment: Commentaire): any {
    
    return this.commentref.add({ ...comment });
    
  }

  delete(id: string): Promise<void> {
    return this.commentref.doc(id).delete();
  }

  getProductComms(id:String){
    this.retrieveComms();

    this.filteredcomms=[]
    for(let c of this.comments){
      if (c.idprod==id){
        this.filteredcomms.push(c)
      }
    }
    
    return this.filteredcomms
  }

  retrieveComms(): void {
    
    this.commentref.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      
      this.comments = data;
    });
    console.log(this.comments)
  }
  
}

