import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginerrorPage } from './loginerror.page';

const routes: Routes = [
  {
    path: '',
    component: LoginerrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginerrorPageRoutingModule {}
