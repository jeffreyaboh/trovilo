import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginerrorPageRoutingModule } from './loginerror-routing.module';

import { LoginerrorPage } from './loginerror.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginerrorPageRoutingModule
  ],
  declarations: [LoginerrorPage]
})
export class LoginerrorPageModule {}
