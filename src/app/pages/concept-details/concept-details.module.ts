import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConceptDetailsPage } from './concept-details.page';
import { AvatarPageModule } from './modal/avatar.module';
import { AvatarPage } from './modal/avatar.page';

const routes: Routes = [
  // { path: '', component: ConceptDetailsPage }
  { path: '', component: ConceptDetailsPage,
    // children: [
    //   { path: 'modal', loadChildren: './modal/avatar.module#AvatarPageModule' }
    // ]
}
];

@NgModule({
  imports: [
     IonicModule,
     CommonModule,
     FormsModule,
     RouterModule.forChild(routes),
    //  AvatarPageModule //x
  ],
  // entryComponents: [AvatarPage],
  exports: [ConceptDetailsPage],
  declarations: [ConceptDetailsPage] //, AvatarPage]
})
export class ConceptDetailsPageModule {}
