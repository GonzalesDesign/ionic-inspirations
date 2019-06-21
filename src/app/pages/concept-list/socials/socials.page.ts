import { ConceptService, Concept } from './../../../services/concept.service';
import { Component, OnInit, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-socials',
	templateUrl: './socials.page.html',
	styleUrls: ['./socials.page.scss']
})
export class SocialsPage implements OnInit, AfterViewInit {

   // TEST
   @Input() receivedParentMessage: string;

   @Output() exampleOutput = new EventEmitter<string>();

   public exampleChild: string; // = 'Hello Angular!';
   // public exampleMethodChild() {
   //    this.exampleOutput.emit(this.exampleChild);
   // }

   public concepts: Observable<Concept[]>;

	public aSocialIcons = [
		{ social: 'like', icon: 'thumbs-up' },
		{ social: 'love', icon: 'heart' },
		{ social: 'ionic', icon: 'logo-ionic' }
	];

   constructor(private _conceptService: ConceptService,
      private _toastController: ToastController) {}

   ngOnInit() {
      this.concepts = this._conceptService.fFetchIdeas();
      console.log('this.concepts: ', this.concepts);
   }
   ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      // this.exampleChild = this.concepts.author;
   }
   public exampleMethodChild() {
      this.exampleOutput.emit(this.exampleChild);
   }

   public exampleOutputChild() {
      this.exampleOutput.emit(this.exampleChild);
   }

   public fLike(selected) {
      console.log('*--------------------------------------------=|');
      console.log('Like it!: ', selected);
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

      }, err => {
         this.fShowToast('There\'s a problem trying to update your social: (')
      });
   }

   public fShowToast(msg) {
		this._toastController
			.create({ message: msg, duration: 1000 })
			.then(toast => toast.present());
   }
}
