import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from 'src/app/pages/landing-page/landing-page.component';
import { RegisterPageComponent } from 'src/app/pages/register-page/register-page.component';
import { ActivationPageComponent } from 'src/app/pages/activation-page/activation-page.component';
import { ActivationGuard } from 'src/app/core';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'success', component: ActivationPageComponent, canActivate: [ActivationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
