import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanLoad {

    constructor(private _authService: AuthService,
                private _router: Router,
                public _afAuth: AngularFireAuth) {}

    /*=---------------------------------------------------=*/
	canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      console.log('Auth Guard:-------===|')
      console.log('Auth Guard: userIsAuthenticated: ',this._authService.userIsAuthenticated);
         // setTimeout(() => {
            // let afUser = this._afAuth.auth.currentUser;
            // console.log('afUser: ', afUser);
         // }, 500);

         // console.log('this._authService.fFireUsr(): ', this._authService.fFireUsr());

         if( this._authService._isAuthenticated) {
            return this._authService.userIsAuthenticated;
         }
         // /*--=| if not authenticated |=--*/
         // if (!this._authService.userIsAuthenticated) {
         //       this._router.navigateByUrl('/login');
         // }
         // /*--=| authenticated |=--*/
         // return this._authService.userIsAuthenticated;

         //   if(!this._afAuth.auth.currentUser) {
         //    this._router.navigateByUrl('/login');
         //   }
         //   this._afAuth.auth.currentUser;
    }

    /*=---------------------------------------------------=*/
}