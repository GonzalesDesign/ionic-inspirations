import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseUIModule } from 'firebaseui-angular';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
// import { ConceptListPageModule } from '../concept-list/concept-list.module;

const routes: Routes = [
  {
    path: '', component: LoginPage,
    children: [
      // { path: 'concept-list', loadChildren: './../../pages/concept-list/concept-list.module#ConceptListPageModule' },
      // { path: 'concept', loadChildren: './../../pages/concept-details/concept-details.module#ConceptDetailsPageModule' },
      // { path: 'concept/:id', loadChildren: './../../pages/concept-details/concept-details.module#ConceptDetailsPageModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FirebaseUIModule,
   //  ConceptListPageModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
