import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupfailurePageRoutingModule } from './signupfailure-routing.module';

import { SignupfailurePage } from './signupfailure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupfailurePageRoutingModule
  ],
  declarations: [SignupfailurePage]
})
export class SignupfailurePageModule {}
