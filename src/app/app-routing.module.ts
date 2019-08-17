import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/login/auth.guard';
import { IconsComponent } from './pages/concept-list/icons/icons.component';
import { AvatarPage } from './pages/concept-details/modal/avatar.page';
// import { SocialsPage } from './pages/concept-list/socials/socials.page';

const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
// { path: 'concept-list', loadChildren: './pages/concept-list/concept-list.module#ConceptListPageModule' },
   { path: 'concept-list', loadChildren: './pages/concept-list/concept-list.module#ConceptListPageModule', canLoad: [AuthGuard] },
   // { path: 'concept', loadChildren: './pages/concept-details/concept-details.module#ConceptDetailsPageModule'},
   { path: 'concept', loadChildren:       './pages/concept-details/concept-details.module#ConceptDetailsPageModule', canLoad: [AuthGuard] },
   { path: 'concept/:id', loadChildren:   './pages/concept-details/concept-details.module#ConceptDetailsPageModule' },
   { path: 'terms', loadChildren: './pages/terms/terms.module#TermsPageModule' },
   { path: 'privacy', loadChildren: './pages/privacy/privacy.module#PrivacyPageModule' },
   { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
   { path: '**', redirectTo: 'login' },
//   { path: 'ngx-share', loadChildren: './pages/concept-list/ngx-share/ngx-share.module#NgxSharePageModule' },
//   { path: 'socials', loadChildren: './pages/concept-list/socials/socials.module#SocialsPageModule' }
//   { path: 'concept', loadChildren: './services/concept/concept.module#ConceptPageModule' },
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
   ],
   // entryComponents: [AvatarPage],
   exports: [RouterModule]
   })
export class AppRoutingModule { }
// export const routingComponents = [SocialsPage];
// export const routingComponents = [IconsComponent];
