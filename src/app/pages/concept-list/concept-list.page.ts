import { firebase } from 'firebaseui-angular';
import { Component, OnInit } from '@angular/core';
import { ConceptService, Concept } from '../../services/concept.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../login/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-concept-list',
	templateUrl: './concept-list.page.html',
	styleUrls: ['./concept-list.page.scss']
})
export class ConceptListPage implements OnInit {

   public concepts: Observable<Concept[]>;
   public isLogin: boolean;

   // temp
   public fDate(date) {
      let day = date.getDate();
      return day;
   }
   private afUser;

   public exampleParent: string;
   public exampleMethodParent($event) {
      this.exampleParent = $event;
   }


   // temp
   counter = 0;
   // temp
   public socialCounter = {
      title: '',
      notes: '',
      author: '',
      dateCreated: this.fDate(new Date()),
      dateDue: this.fDate(new Date()),
      avatarInfo: '',
      avatarName: '',
      avatarUrl: '',
      selectedAvatar: '',
      socialLike: 0 // this.counter
   }

   //temp
   public aSocialIcons = [
      {  social: 'like',
         icon: 'thumbs-up'
      },
      {  social: 'love',
         icon: 'heart'
      },
      {  social: 'ionic',
         icon: 'logo-ionic'
      }
   ]
   // temp
   public likesCount = 0;
   public lovesCount = 10;


   constructor(private _conceptService: ConceptService,
               public _afAuth: AngularFireAuth,
               private _authService: AuthService,
               private _toastController: ToastController) {}

	ngOnInit() {
      this.isLogin = true;
      this.concepts = this._conceptService.fFetchIdeas();
      console.log('this.concepts: ', this.concepts);


	}

   public fLike(selected) {
      console.log('*--------------------------------------------=|');
      console.log('Like it!: ', selected);
      // let likesCount = this.likesCount;
      // console.log('likesCount: ',likesCount);
      /*--------------------------------------------=|
         pseudo-code:
         selected = aSocialIcons[selected]
         what it should do everytime it's clicked:
         Add 1 count of socialLike to the page caller
         and display it back as a badge.
      |=---------------------------------------------*/
      this._conceptService.fGetIdea(selected).subscribe(concept => {
         // likesCount = concept.socialLike;
         // console.log('likesCount1: ',likesCount);

         // concept.socialLike = this.likesCount++;
         concept.socialLike += 1;
         // console.log('concept.socialLike1: ',concept.socialLike);
         this._conceptService.fUpdateSocial(concept);

         // this._conceptService.fUpdateSocial(concept).then( () => {
         //    // concept.socialLike = this.likesCount++;
         //    // console.log('concept.socialLike2: ',concept.socialLike);
         //    this.fShowToast('Liked!: '+ concept.socialLike);
         // })
      }, err => {
         this.fShowToast('There\'s a problem trying to update your social: (')
      });
   }
      
   public fShowToast(msg) {
		this._toastController
			.create({ message: msg, duration: 1000 })
			.then(toast => toast.present());
   }

   public fHeart() {
      console.log('Love it!');
   }

   public fShare() {
      console.log('Share it!');
   }

   public fSignOut() {
      // console.log('this.afUser: ', this.afUser);
      this._afAuth.auth.signOut().then(() => {
         this.isLogin = false;
         location.pathname = '/login';
         // location.reload();
      })
   }



}
