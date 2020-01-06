import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupfailurePage } from './signupfailure.page';

const routes: Routes = [
  {
    path: '',
    component: SignupfailurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupfailurePageRoutingModule {}
