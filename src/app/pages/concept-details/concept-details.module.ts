import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConceptDetailsPage } from './concept-details.page';
import { AvatarPageModule } from './modal/avatar.module';

const routes: Routes = [
  {
    path: '',
    component: ConceptDetailsPage
  }
];

@NgModule({
  imports: [
     IonicModule,
     CommonModule,
     FormsModule,
     RouterModule.forChild(routes),
   //   AvatarPageModule
  ],
  exports: [ConceptDetailsPage],
  declarations: [ConceptDetailsPage]
})
export class ConceptDetailsPageModule {}
