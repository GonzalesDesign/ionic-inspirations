import { firebase } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, ModalController, NavController } from '@ionic/angular';
import { Concept, ConceptService } from '../../services/concept.service';
import { AvatarPage } from './modal/avatar.page';
// import { DatePipe, formatDate } from '@angular/common';

@Component({
	selector: 'app-concept-details',
	templateUrl: './concept-details.page.html',
	styleUrls: ['./concept-details.page.scss']
})
export class ConceptDetailsPage implements OnInit {

   public fNewDate(date){
      let monthNames = [
         "Jan", "Feb", "Mar",
         "Apr", "May", "Jun", "Jul",
         "Aug", "Sep", "Oct",
         "Nov", "Dec"
       ];
      let year = date.getFullYear();
      let monthIndex = date.getMonth();
      let day = date.getDate();
      // this.aldaw = date.getDate();
      return monthNames[monthIndex] + ' ' + day + ',' + year;
   }

   // public fNewDay(d) {
   //    const x = d.getDate();
   //    // let dia = formatDate(x, 'mmm dd', 'en');
   //    // console.log('x: ', x);
   //    // this.dueDayTest = x;
   //    return x;
   // }

   // public fNewMonth(m) {
   //    let monthNames = [
   //       "Jan", "Feb", "Mar",
   //       "Apr", "May", "Jun", "Jul",
   //       "Aug", "Sep", "Oct",
   //       "Nov", "Dec"
   //     ];
   //    let bolan = m.getMonth();
   //    // console.log('bolan: ', bolan);
   //    // console.log('monthNames[bolan]: ', monthNames[bolan]);
   //    // this.dueMonthTest = monthNames[bolan];
   //    // console.log('this.dueMonthTest: ', this.dueMonthTest);
   //    return monthNames[bolan];
   // }

   // public avatarSelectOptionX = ['Chi', 'Jim', 'Moh'];

   public avatarPassed: string;
   public aAvatarImg = [
      './../../../assets/images/Chi.jpg',
      './../../../assets/images/Jim.jpg',
      './../../../assets/images/Moh.jpg'
   ]
   // public avatarSelectOption = [
   //    {
   //       id: 'a0',
   //       avatarName: 'Chi',
   //       avatarUrl: './../../../assets/images/Chi.jpg',
   //       // avatarInfo: 'Short description for the Avatar'
   //    },
   //    {
   //       id: 'a1',
   //       avatarName: 'Jim',
   //       avatarUrl: './../../../assets/images/Jim.jpg',
   //       // avatarInfo: 'Short description for the Avatar'
   //    },
   //    {
   //       id: 'a2',
   //       avatarName: 'Moh',
   //       avatarUrl: './../../../assets/images/Moh.jpg',
   //       // avatarInfo: 'Short description for the Avatar'
   //    }
   // ];

   public concept: Concept = {
		title: '',
      notes: '',
      author: '',
      dateCreated: this.fNewDate(new Date()),
      dateDue: this.fNewDate(new Date()),
      avatarInfo: '',
      avatarName: 'Chi',
      avatarUrl: './../../../assets/images/Chi.jpg',
      selectedAvatar: 'SelectedAvatar',
      socialLike: 0
   };

   public id = null;

   public value = 100;

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _conceptService: ConceptService,
		private _toastController: ToastController,
      private _router: Router,
      public _afAuth: AngularFireAuth,
      public _modalController: ModalController,
      private _navController: NavController
	) {}

	ngOnInit() {
      // test
      // let user = firebase.auth().currentUser;
      // console.log('user: ', user.displayName);

      this.id = this._activatedRoute.snapshot.paramMap.get('id');
      console.log('this.id: ', this.id);
   }

   // Test
   public fSignOut() {
      this._afAuth.auth.signOut().then(() => {
         location.pathname = '/login';
         // location.reload();
      })
   }
   // ------------------------------------------------------------------------

   ionViewWillEnter() {
      if (this.id) {
         this._conceptService.fGetIdea(this.id).subscribe(concept => {
            this.concept = concept;
         });
      }
   }

   public fThumbsUp() {
      console.log('details.fThumbsUp');

   }

   // public fAvatarHandler() {
   //    let selectedAvatar = this.concept.avatarName;
   //    console.log('selectedAvatar: ', selectedAvatar);
   //    let index = this.avatarSelectOption.findIndex(x => x.avatarName == selectedAvatar.trim());
   //    console.log('index: ',index);
   //    this.concept.avatarUrl = this.avatarSelectOption[index].avatarUrl; //populate fb
   //    console.log('this.concept.avatarUrl: ', this.concept.avatarUrl);
   // }

   public fAddIdea() {
      // this.fAvatarHandler();
      this._conceptService.fAddIdea(this.concept).then( () => {
         // this.concept.avatarUrl = this.avatarSelectOption[1].avatarUrl;
         // console.log('this.concept.avatarUrl: ', this.concept.avatarUrl);
         this._router.navigateByUrl('/concept-list');
         this.fShowToast('Concept Added');
         // console.log('Add this.concept: ', this.concept);
         // console.log('Add this.avatarSelectOption: ', this.avatarSelectOption);
         // console.log('Add this.concept.avatarName: ', this.concept.avatarName);
         // console.log('Add this.concept.avatarUrl: ', this.concept.avatarUrl);
         // console.log('Add this.concept.selectedAvatar: ', this.concept.selectedAvatar);
         // let result = this.avatarSelectOption;
         // let result = this.concept.selectedAvatar;
         // console.log('Add this.concept.selectedAvatar: ', result.indexOf(this.avatarSelectOption));
         // this.concept.avatarName = this.concept.selectedAvatar;
         // let keys = Object.values(this.avatarSelectOption[]);
         // console.log('keys: ', keys)
         // let result = this.avatarSelectOption.map(a => a.avatarName);
         // console.log('result: ', result)
         // let selctdAvatr = this.concept.selectedAvatar.toString();
         // console.log('selctdAvatr: ',selctdAvatr);
         // // .then( () => {
         //    let index = this.avatarSelectOption.findIndex(x => x.avatarName === selctdAvatr );
         // let index = this.avatarSelectOption.findIndex(x => x.avatarName === 'Chi');
         // // // let index = this.avatarSelectOption.findIndex(x => x.avatarName === result);
         // // // let index = this.concept.avatarName; // this.avatarSelectOption[] //.findIndex(a => a.avatarName);
         // console.log('index: ',index);
         // // })

         // let students = [{name:"Rambabu",htno:"1245"},{name:"Divya",htno:"1246"},{name:"poojitha",htno:"1247"},{name:"magitha",htno:"1248"}];
         // let studentNameToSearch = "Divya";
         // let studentNameToSearch = 'Chi'; // this.concept.selectedAvatar;
         // let matchedIndex = this.avatarSelectOption.map(function (obj) { return obj.avatarName; }).indexOf(studentNameToSearch);
         // console.log('matchedIndex: ', matchedIndex);


      }, err => {
         this.fShowToast('There\'s a problem trying to add a concept: (')
      });
   }

   public fDeleteIdea() {
      this._conceptService.fDeleteIdea(this.concept.id).then( () => {
         this._router.navigateByUrl('/concept-list');
         this.fShowToast('Concept Deleted!');
      }, err => {
         this.fShowToast('There\'s a problem trying to delete the concept: (')
      });
   }

   public fUpdateIdea() {
      // this.fAvatarHandler();
      this._conceptService.fUpdateIdea(this.concept).then( () => {
         this._router.navigateByUrl('/concept-list');
         this.fShowToast('Concept Updated!');
      }, err => {
         this.fShowToast('There\'s a problem trying to update your concept: (')
      });
   }

	public fShowToast(msg) {
		this._toastController
			.create({ message: msg, duration: 1000 })
			.then(toast => toast.present());
   }

   async fOpenModal() {
      const modal = await this._modalController.create({
        component: AvatarPage,
        componentProps: {
           props: [{
              custom_prop: this.concept,
              custom_prop1: this.concept.avatarName,
              custom_prop2: this.concept.avatarUrl
            }
           ]
          }
      });
      modal.onDidDismiss()
      .then((selectedAvatar) => {
      //   const avatar = data['x'];
      //   console.log('data: ', data);
        let dataObj = selectedAvatar.data;
      //   console.log('dataObj: ', dataObj);
      //   console.log('dataObj.avatarName: ', dataObj.avatarName);
      //   console.log('dataObj.avatarUrl: ', dataObj.avatarUrl);

        this.concept.avatarName = dataObj.avatarName; //new value
        this.concept.avatarUrl = dataObj.avatarUrl; //new value
    });
      return await modal.present();
    }

    /*--=| Search Engine: WIP |=--*/
   //  public filterItems(searchTerm) {
   //    return this.avatarSelectOption.filter(item => {
   //       console.log('item: ', item);
   //      return item.avatarName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
   //    });
   //  }
}
