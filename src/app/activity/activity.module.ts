import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityPageRoutingModule } from './activity-routing.module';

import { ActivityPage } from './activity.page';

import { FileSizeFormatPipe } from 'src/app/activity/file-size-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityPageRoutingModule
  ],
  declarations: [ActivityPage, FileSizeFormatPipe]
})
export class ActivityPageModule {}
