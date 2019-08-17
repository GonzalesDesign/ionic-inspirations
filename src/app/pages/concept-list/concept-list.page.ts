import { firebase } from 'firebaseui-angular';
import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ConceptService, Concept } from '../../services/concept.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../login/auth.service';
import { ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
// import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
	selector: 'app-concept-list',
	templateUrl: './concept-list.page.html',
	styleUrls: ['./concept-list.page.scss']
})

export class ConceptListPage implements OnInit {

   // @Input ();
   // public messageToChild: string = 'Message From Parent';

   public concepts: Observable<Concept[]>;
   public isLogin: boolean;

   // temp
   public fDate(date) {
      let day = date.getDate();
      return day;
   }
   private afUser;

   public authFirstName:string

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
         icon: 'thumbs-up',
         funktion: 'this.fLike(id)'
      },
      {  social: 'love',
         icon: 'heart',
         funktion: 'this.fLike(id)'
      },
      {  social: 'ionic',
         icon: 'logo-ionic',
         funktion: 'this.fShare()'
      }
   ]
   // temp
   public likesCount = 0;
   public lovesCount = 10;

   public emailAddress = 'rolandolloyd@gmail.com';

   constructor(private _conceptService: ConceptService,
               public _afAuth: AngularFireAuth,
               private _authService: AuthService,
               private _toastController: ToastController,
               private _socialSharing: SocialSharing) {}

	ngOnInit() {
      this.isLogin = true;
      this.concepts = this._conceptService.fFetchIdeas();
      // console.log('this.concepts: ', this.concepts);
      console.log('/*---------------------------------*/');

      
   }
   
   public fAddLike(selected) {
      // concept.socialLike = this.likesCount++;
      console.log('this.likesCount++: ', this.likesCount++);
      let sx = (concept => {
         concept.socialLike += this.likesCount;
         console.log('concept: ', concept);
         console.log('sx: ', sx);
      });
      console.log('sx: ', sx);

      setTimeout(() => {
         this.fUpdateLikeInDB(selected);
         this.likesCount = 1;
         // this._conceptService.fGetIdea(selected);
         //    let sx = (concept => {
         //    concept.socialLike += this.likesCount;
         //    // concept.socialLike += 1;
         //    this._conceptService.fUpdateSocial(concept);
         // })
         
      }, 300);
      
   }

   public fUpdateLikeInDB(selected) {
      this._conceptService.fGetIdea(selected).subscribe(concept => {
         concept.socialLike += this.likesCount;
         // concept.socialLike += 1;
         this._conceptService.fUpdateSocial(concept);
         // this._conceptService.fUpdateSocial(concept).then( () => {
         //    // concept.socialLike = this.likesCount++;
            console.log('concept.socialLike +1 : ',concept.socialLike);
         //    this.fShowToast('Liked!: '+ concept.socialLike);
         // })
      }, err => {
         this.fShowToast('There\'s a problem trying to update your social like: (')
      });
   }

   public fLike(selected) {
      console.log('*------------------------------------=|');
      console.log('Like it!: ', selected);
      console.log('location.pathname: ', location.pathname);
      /*--------------------------------------------=|
         pseudo-code:
         selected = aSocialIcons[selected]
         what it should do everytime it's clicked:
         Add 1 count of socialLike to the page caller
         and display it back as a badge.
      |=---------------------------------------------*/
      this._conceptService.fGetIdea(selected).subscribe(concept => {
         concept.socialLike += 1;
         this._conceptService.fUpdateSocial(concept);
         // this._conceptService.fUpdateSocial(concept).then( () => {
         //    // concept.socialLike = this.likesCount++;
            console.log('concept.socialLike: ',concept.socialLike);
         //    this.fShowToast('Liked!: '+ concept.socialLike);
         // })
      }, err => {
         this.fShowToast('There\'s a problem trying to update your social like: (')
      });
   }

   public fTestSubscribe() {
      this._conceptService.fSubscribeTest()
      // .subscribe(concept => {
      //    concept.socialLike;
      // })
   }

   public fHeart() {
      console.log('Love it!');
   }
   /*---------------------------------------------------*/
   async fShareTwitter() {
      this._socialSharing.shareViaTwitter('Share via Twitter').then(() => {
         
      }).catch( e => {
         console.log('Problem sharing with Twitter');
      })
   }
   
   /*---------------------------------------------------*/
   async fShare() {
      console.log('Share it!');
      // Check if sharing via email is supported
      this._socialSharing.canShareViaEmail().then(() => {
         console.log('Sharing via email is possible');
      }).catch(() => {
         console.log('Sharing via email is not possible');
      });
      
      // Share via email
      this._socialSharing.shareViaEmail(
         'Body: Create the Basic Ionic 4 Social Sharing App', 
         'Subject: Email from concept', 
         [this.emailAddress],
         null, null, null)
         .then(() => {
            console.log('Success!');
         }).catch(() => {
            console.log('Error!');
      });
   }
      /*---------------------------------------------------*/
      
   public fSignOut() {
      // console.log('this.afUser: ', this.afUser);
      this._afAuth.auth.signOut().then(() => {
         this.isLogin = false;
         location.pathname = '/login';
         // location.reload();
      })
   }

   public fShowToast(msg) {
		this._toastController
			.create({ message: msg, duration: 1000 })
			.then(toast => toast.present());
   }

   // @HostListener('window:scroll', ['$event'])
   // onScroll(event) {
   //    console.log('You scrolled!', event);
   //    let yPos = window.pageYOffset;
   //    // this.fTestScroll();
   // }





}
