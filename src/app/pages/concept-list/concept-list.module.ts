import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConceptListPage } from './concept-list.page';
import { SocialsPage } from './socials/socials.page';
// import { SocialsPageModule } from './socials/socials.module';
// import { SharedModule } from 'src/app/shared.module';
import { IconsComponent } from './icons/icons.component';
import { SharedModule } from 'src/app/shared.module';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
// import { FirebaseUIModule } from 'firebaseui-angular;

const routes: Routes = [
  {
    path: '',
    component: ConceptListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
   //  SocialsPageModule
   //  FirebaseUIModule
   SharedModule
  ],
  declarations: [
     ConceptListPage,
    //  IconsComponent, //paste in shared.module
    //  SocialsPage
   ],
   // entryComponents: [SocialsPage],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConceptListPageModule {}
