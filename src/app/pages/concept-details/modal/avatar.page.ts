import { AvatarService, Avatar } from "./../../../services/avatar.service";
import { Concept } from "./../../../services/concept.service";
import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";
import { Observable } from "rxjs";

@Component({
	selector: "app-avatar",
	templateUrl: "./avatar.page.html",
	styleUrls: ["./avatar.page.scss"]
})
export class AvatarPage implements OnInit {
	@ViewChild("avatarImage") avatarImage: ElementRef;

	// "value" passed in componentProps
	@Input() value: number;

	public passedProp = null;

	/*--=| Avatars Array from DB |=--*/
	// public avatarsDBSelection: any = [];
	public avatarsDBSelection: Observable<Avatar[]>;

	/*--=| Avatars Array: For manually populating DB |=--*/
	public avatarSelectOption = [
		// { id: 'a0',
		// 	avatarName: 'Chi',
		// 	avatarUrl: './../../../assets/images/Chi.jpg',
		// 	avatarDescription: 'Chi, The silk coder'},
		// { id: 'a1',
		// 	avatarName: 'Jim',
		// 	avatarUrl: './../../../assets/images/Jim.jpg',
		// 	avatarDescription: 'Jim, The bearded guy'},
		// { id: 'a2',
		// 	avatarName: 'Moh',
		// 	avatarUrl: './../../../assets/images/Moh.jpg',
		// 	avatarDescription: 'Moh, the rebel funk'},
		// { id: 'a3',
		// 	avatarName: 'Girl',
		// 	avatarUrl: './../../../assets/images/Girl.png',
		// 	avatarDescription: 'Gal, coder'},
		// { id: 'a4',
		// 	avatarName: 'John',
		// 	avatarUrl: './../../../assets/images/John.png',
		// 	avatarDescription: 'Moh, the young gun'},
		// { id: 'a5',
		// 	avatarName: 'Mujka',
		// 	avatarUrl: './../../../assets/images/Mujka.jpg',
		// 	avatarDescription: 'Mujka, from Russia with love'},
		// { id: 'a6',
		// 	avatarName: 'Lady',
		// 	avatarUrl: './../../../assets/images/Lady.png',
		// 	avatarDescription: 'Lady, code assasin'},
		// { id: 'a7',
		// 	avatarName: 'Tupac',
		// 	avatarUrl: './../../../assets/images/Tupac.webp',
		// 	avatarDescription: 'Tupac, definitive complicated rapper, a beautiful soul.'},
			{ id: 'a8',
				avatarName: 'Bruce',
				avatarUrl: './../../../assets/images/Bruce.jpg',
				avatarDescription: 'Bruce, be water man'}
	];

	constructor(
		private _modalController: ModalController,
		public _navParams: NavParams,
		private _elementRef: ElementRef,
		private _avatarService: AvatarService
	) {
		// ,
		// componentProps can also be accessed at construction time using NavParams
		//  this.passedProp = this._navParams.get('custom_id');
	}

	ngOnInit() {
		/*--=| passedProp: property passed from the caller component |=--*/
		this.passedProp = this._navParams.get("props");
		// console.log('this.passedProp: ', this.passedProp);

		// let fetchedAvatar = this._avatarService.fFetchAvatars();
		// console.log('fetchedAvatar: ', fetchedAvatar);

		/*--=| on page display: call service to fetch the avatars data |=--*/
		this.avatarsDBSelection = this._avatarService.fFetchAvatars();
		console.log("this.avatarsDBSelection: ", this.avatarsDBSelection);

		// this.fAddAvatarsManually(); // run once only!

		// let dumpedAvatars = this._avatarService.fDumpAvatarsData(this.avatarSelectOption[0]);
		// console.log('dumpedAvatars: ', dumpedAvatars);
		// this._avatarService.fGetDatas();
	}

	/*--=| Run once to populate db: Test |=--*/
	public fAddAvatarsManually() {
	   for(let i=0; i<this.avatarSelectOption.length; i++) {
	      this._avatarService.fDumpAvatarsData(this.avatarSelectOption[i]);
	   }
	}

	public fSelectedImage(selected: Concept) {
		console.log("=--------------------------------=");
		console.log("selected: ", selected);
		/*--=| findIndex() = find the index of the clicked image
             from the calling component by comparing avatarName
             from the avatarSelectOption array and the clicked
             image avatarName \=--*/
		// let index = this.avatarSelectOption.findIndex(
		// 	aOption => aOption.avatarName == selected.avatarName
		// );
		// console.log('index: ', index, this.avatarSelectOption[index].avatarName);

		// let selectedAvatar = selected; //selected avatar object
		// console.log('selectedAvatar: ', selectedAvatar);

		this.fCloseModal(selected);
		// this.fCloseModal(selectedAvatar);
	}

	public fCloseModal(i: Concept) {
		this._modalController.dismiss(i);
	}
	
	public fModalClose() {
		this._modalController.dismiss();
	}

}
