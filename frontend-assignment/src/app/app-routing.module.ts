import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageContainer } from './container/landing-page-container/landing-page.container';


const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
   { path: 'dashboard', component: LandingPageContainer},
   { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
