import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  constructor(public _afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

//   public fSignOut() {
//    this._afAuth.auth.signOut().then(() => {
//       location.pathname = '/login';
//       location.reload();
//    })
// }

}
