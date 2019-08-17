import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore'
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AvatarPage } from './pages/concept-details/modal/avatar.page';
import { AvatarPageModule } from './pages/concept-details/modal/avatar.module';
import { SocialsPageModule } from './pages/concept-list/socials/socials.module';
import { SocialsPage } from './pages/concept-list/socials/socials.page';
import { SharedModule } from './shared.module';
import { IconsComponent } from './pages/concept-list/icons/icons.component';

import { SocialSharing } from '@ionic-native/social-sharing/ngx'; //Simon say
import { ServiceWorkerModule } from '@angular/service-worker';
import { ConceptDetailsPageModule } from './pages/concept-details/concept-details.module';
// import { SocialSharing } from '@ionic-native/social-sharing';

// import { ShareButtonsModule } from '@ngx-share/buttons';
// import { HttpClientModule } from '@angular/common/http';
// import { ShareModule } from '@ngx-share/core';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInSuccessUrl: '/concept-list',
  signInOptions: [
      {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
      }
   ],
//   signInOptions: [
//    firebase.auth.EmailAuthProvider.PROVIDER_ID
//       // {
//       //    requireDisplayName: true
//       // }
//    ],
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     {
//       scopes: [
//         'public_profile',
//         'email',
//         'user_likes',
//         'user_friends'
//       ],
//       customParameters: {
//         'auth_type': 'reauthenticate'
//       },
//       provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
//     },
//     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     firebase.auth.GithubAuthProvider.PROVIDER_ID,
//     {
//       requireDisplayName: false,
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
//     },
//     firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//     firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
//   ],
  tosUrl: '/terms',
  privacyPolicyUrl: '/privacy',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
  declarations: [
     AppComponent,
   //   IconsComponent,
   //   routingComponents
   ],

  entryComponents: [],

  imports: [
     BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebase),
    //  AngularFireModule.initializeApp(environment.production),
     AngularFirestoreModule,
     AngularFireAuthModule,
     FirebaseUIModule.forRoot(firebaseUiAuthConfig),
     AvatarPageModule, //xx
    // ConceptDetailsPageModule, //x
     ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    //  HttpClientModule,
    //  ShareButtonsModule,
    //  ShareModule
   //   SocialsPageModule
      // SharedModule
   ],

  providers: [
    StatusBar,
    SplashScreen,
   //  SocialsPage,
   //  AvatarPage,
   //  NavParams,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SocialSharing
  ],

  bootstrap: [AppComponent],

//   schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {}
