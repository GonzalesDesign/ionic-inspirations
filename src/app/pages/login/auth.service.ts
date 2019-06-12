import { firebase } from 'firebaseui-angular';
import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   // private _isAuthenticated = true;
   // private _isAuthenticated = false;
   public _isAuthenticated = false;

   // public afUser: any;

   // private curUser = firebase.auth().currentUser;
   // constructor(private _afAuth: AngularFireAuth) {}


   // public fFireUsr() {
   //    this._afAuth.auth.currentUser;
   //    console.log('this.afUser: ', this.afUser);
   // }



   get userIsAuthenticated() {
      // console.log('this.curUser: ',this.curUser);
      // console.log('firebase.auth().currentUser: ', firebase.auth().currentUser);
      // let fireUser =  firebase.auth().onAuthStateChanged((user) => {
      // let fireUser =  firebase.auth().onAuthStateChanged(function(user) {
      // // return firebase.auth().onAuthStateChanged(function(user) {
      //    if(user) {
            console.log('this._isAuthenticated: ',this._isAuthenticated);
      //       return this._isAuthenticated;
      //    }
      //    return fireUser;
      // });
      // return fireUser;
      // return this._isAuthenticated;
      return this._isAuthenticated = true;
      // return fFireUser;
   }
   // fFireUser() {
      // public fireUser =  firebase.auth().onAuthStateChanged((user) => {
      //    if(user) {
      //       console.log('this._isAuthenticated: ',this._isAuthenticated);
      //       return this._isAuthenticated;
      //    }
      // });
   // }



   /*=----------------------------------------=*/
   public fLogin() {
       this._isAuthenticated = true;
       console.log('this._isAuthenticated: ',this._isAuthenticated);
   }

   /*=----------------------------------------=*/
   public fLogout() {
       this._isAuthenticated = false;
   }

   /*=----------------------------------------=*/
}