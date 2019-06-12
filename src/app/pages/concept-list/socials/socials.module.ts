import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SocialsPage } from './socials.page';

const routes: Routes = [
	{
		path: '',
		component: SocialsPage
	}
];

@NgModule({
	declarations: [],
	// declarations: [SocialsPage],

	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild(routes)
   ],

	exports: []
	// exports: [SocialsPage]
})
export class SocialsPageModule {}
