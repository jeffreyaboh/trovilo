import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupsuccessPage } from './signupsuccess.page';

const routes: Routes = [
  {
    path: '',
    component: SignupsuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupsuccessPageRoutingModule {}
