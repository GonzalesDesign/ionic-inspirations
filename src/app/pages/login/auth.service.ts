import { firebase } from "firebaseui-angular";
import { Injectable } from "@angular/core";
// import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
	providedIn: "root"
})
export class AuthService {
	public _isAuthenticated = false;

	get userIsAuthenticated() {
		console.log("this._isAuthenticated: ", this._isAuthenticated);
		return (this._isAuthenticated = true);
	}

	/*=----------------------------------------=*/
	public fLogin() {
		this._isAuthenticated = true;
		console.log("this._isAuthenticated: ", this._isAuthenticated);
	}

	/*=----------------------------------------=*/
	public fLogout() {
		this._isAuthenticated = false;
	}

	/*=----------------------------------------=*/
}
