import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';

export interface Avatar {
	id?: string;
	avatarName: string;
	avatarUrl: string;
}

@Injectable({
	providedIn: 'root'
})
export class AvatarService {
	private avatars: Observable<Avatar[]>;
	private avatarCollection: AngularFirestoreCollection<Avatar>;

	constructor(private _afs: AngularFirestore) {
      this.avatarCollection = this._afs.collection<Avatar>('avatar');
      this.avatars = this.avatarCollection.snapshotChanges().pipe (
         map (actions => {
            return actions.map (a => {
               const data = a.payload.doc.data();
               // console.log('avatars data: ', data);
               const id = a.payload.doc.id;
               return { id, ...data};
            });
         })
      );
      console.log('this.avatars: ', this.avatars);
   }

   public fFetchAvatars(): Observable<Avatar[]> {
      console.log('fFetchAvatars: ', this.avatars);
      return this.avatars;
   }

   public fGetIdea(id: string): Observable<Avatar> {
      return this.avatarCollection.doc<Avatar>(id).valueChanges().pipe(
         take(1),
         map( avatar => {
            avatar.id = id;
            return avatar;
         })
      );
   }

   public fDumpAvatarsData(avatar: Avatar) {
      // avatar: Avatar
      console.log('avatar: ', avatar);
      return this.avatarCollection.add(avatar);
   //    this.avatarCollection.doc("LA").set({
   //       avatarName: "John",
   //       avatarUrl: "./../../../assets/images/John.png"
   //   })
   //   console.log('this.avatarCollection: ', this.avatarCollection);
   }

   // public fGetDatas() {
   //    let docRef = this.avatarCollection.doc("Chi");
   //    docRef.get().then(function(doc) {
   //       if (doc.exists) {
   //          console.log("Document data:", doc.data());
   //       }
   //    }
   // }


   // public fAddIdea(avatar: Avatar): Promise<DocumentReference> {
   //    console.log(this.avatarCollection.add(avatar));
   //    // return this.avatarCollection.add(avatar);
   // }

}
