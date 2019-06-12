// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialsPage } from './pages/concept-list/socials/socials.page';
import { AvatarPageModule } from './pages/concept-details/modal/avatar.module';
import { SocialsPageModule } from './pages/concept-list/socials/socials.module';
import { IonicModule } from '@ionic/angular';
import { IconsComponent } from './pages/concept-list/icons/icons.component';

@NgModule({
	declarations: [
      SocialsPage,
      IconsComponent
   ],

   // entryComponents: [SocialsPage],

	exports: [
      SocialsPage,
      IconsComponent
   ],

	// imports: [
   //    CommonModule,
   //    AvatarPageModule,
   //    IonicModule, //added didn't work
   //    // SocialsPageModule
   // ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
