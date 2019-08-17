import { Component, OnInit } from "@angular/core";
import { firebase } from "firebaseui-angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { EmailValidator } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.page.html",
	styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
	public isLoading = false;
	public isLogin = true;

	constructor(
		public _afAuth: AngularFireAuth,
		private _router: Router,
		public _authService: AuthService
	) {
		// _afAuth.auth.signInWithEmailAndPassword()
		//    _afAuth.auth().signInWithEmailAndPassword(email, password)
		//      .catch(function(error) {
		//    var errorCode = error.code;
		//    var errorMessage = error.message;
		//    if (errorCode === 'auth/wrong-password') {
		//      alert('Wrong password.');
		//    } else {
		//      alert(errorMessage);
		//    }
		//    console.log(error);
		//  });
	}

	ngOnInit() {
		// this._authService.fLogin();
		this.fSignOut();
	}

	/*=----------------------------------------=*/
	public fSwitchToLogin() {
		this.isLogin = !this.isLogin;
	}

	/*=----------------------------------------=*/
	public fOnLogin() {
		this.isLoading = true;
		this._authService.fLogin();
	}

	public fLogin() {
		//   this._afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
		//   this._afAuth.auth.signInWithRedirect..then(() => {
		//    location.pathname = '/concept/concept-list';
		//   })
		this._router.navigateByUrl("/concept-list");
	}

	public fSignOut() {
		this._afAuth.auth.signOut().then(() => {
			// location.pathname = '/';
			// location.pathname = '/concept';
			// location.reload();
		});
	}
}
