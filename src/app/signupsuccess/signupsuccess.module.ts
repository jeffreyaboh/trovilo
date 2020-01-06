import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupsuccessPageRoutingModule } from './signupsuccess-routing.module';

import { SignupsuccessPage } from './signupsuccess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupsuccessPageRoutingModule
  ],
  declarations: [SignupsuccessPage]
})
export class SignupsuccessPageModule {}
