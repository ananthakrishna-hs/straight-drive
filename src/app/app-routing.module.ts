import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from 'src/app/pages/landing-page/landing-page.component';
import { RegisterPageComponent } from 'src/app/pages/register-page/register-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
