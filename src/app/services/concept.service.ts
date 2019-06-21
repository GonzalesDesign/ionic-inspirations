import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';


export interface Concept {
   id?: string,
   title: string,
   notes: string,
   author: string,
   dateCreated: string,
   dateDue: string,
   avatarInfo: string,
   avatarName: string,
   authUser: string,
   authFirstName: string,
   avatarUrl: string,
   selectedAvatar: string,
   socialLike: number,
   // socialLove: number,
   // socialShare: number
}

@Injectable({
  providedIn: 'root'
})

export class ConceptService {

   private concepts: Observable<Concept[]>;
   
   private conceptCollection: AngularFirestoreCollection<Concept>;
   
   // public splitName: Observable<Concept[]>;

   public authFirstName: string;

  constructor(private _afs: AngularFirestore) {
     this.conceptCollection = this._afs.collection<Concept>('concept');
     this.concepts = this.conceptCollection.snapshotChanges().pipe (
        map (actions => {
           return actions.map (a => {
              const data = a.payload.doc.data();
              console.log('data-------------------------------: ', data);
            //   console.log('this.conceptCollection: ', this.conceptCollection);
            //   console.log('this.concepts: ', this.concepts);

            //   this.splitName = data;

            //   if(data.authUser) {
            //      let str = data.authUser;
            //      let res = str.split(' ');
            //      console.log('str: ', str);
            //      console.log('res: ', res);
            //      console.log('res[0]: ', res[0]);
            //      this.authFirstName = res[0];
            //      console.log('this.authFirstName:x ', this.authFirstName);
            //   }

            //   console.log('data.socialLike: ', data.socialLike);

              const id = a.payload.doc.id;
              return { id, ...data};
           });
        })
     );
   }

   public fAuthFirstNameX(firstName) {
      firstName = 'Odee';
      console.log('firstName: ', firstName, this.authFirstName);
      // let str = this.splitName.authUser;
      // let res = str.split(' ');
      // console.log('res: ', res);
      // this.authFirstName = res[0];
      // console.log('this.authFirstName: ', this.authFirstName);
      // console.log('this.splitName: ', this.splitName);
   }
   // public fAuthFirstName(authUser: string): Observable<Concept> {
   //    return this.conceptCollection.doc<Concept>(authUser).valueChanges().pipe(
   //       take(1),
   //       map( concept => {
   //          // concept.id = id;
   //          concept.authUser = authUser;
   //          console.log('authUser: ', authUser);
   //          return concept;
   //       })
   //    );
   // }

   // let str = this.concept.authUser;
   //    let res = str.split(' ');
   //    console.log('res: ', res);
   //    this.authFirstName = res[0];
   //    console.log('this.authFirstName: ', this.authFirstName);


   public fFetchIdeas(): Observable<Concept[]> {
      console.log('this.concepts: ', this.concepts);
      return this.concepts;
   }

   public fGetIdea(id: string): Observable<Concept> {
      return this.conceptCollection.doc<Concept>(id).valueChanges().pipe(
         take(1),
         map( concept => {
            concept.id = id;
            return concept;
         })
      );
   }

   public fSubscribeTest(): Observable<Concept[]> {
      // console.log('fSubscribeTest this.concepts: ', this.concepts);
      return this.concepts;
   }

   public fAddIdea(concept: Concept): Promise<DocumentReference> {
      return this.conceptCollection.add(concept);
   }

   public fAddSocialCount(socialCount: Concept): Promise<DocumentReference> {
      return this.conceptCollection.add(socialCount);

   }

   public fUpdateIdea(concept: Concept): Promise<void> {
      // console.log('conceptA: ', concept);
      // console.log('conceptA.id: ', concept.id);
      return this.conceptCollection.doc(concept.id).update(
         {  title: concept.title,
            notes: concept.notes,
            author: concept.author,
            dateCreated: concept.dateCreated,
            dateDue: concept.dateDue,
            avatarInfo: concept.avatarInfo,
            avatarName: concept.avatarName,
            // authUser: concept.authUser, //new test field: June 19: add to fb manually
            avatarUrl: concept.avatarUrl,
            selectedAvatar: concept.selectedAvatar, //new test field: add in firebase for older collection
            socialLike: concept.socialLike,
         });
   }

   public fUpdateSocial(concept: Concept): Promise<void> {
      // console.log('conceptB: ', concept);
      // console.log('conceptB.id: ', concept.id);
      // console.log('conceptB.socialLike: ', concept.socialLike);
      return this.conceptCollection.doc(concept.id).update({ 
         socialLike: concept.socialLike });
   }


   public fDeleteIdea(id: string): Promise<void> {
      return this.conceptCollection.doc(id).delete();
   }

}
