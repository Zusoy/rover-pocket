import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RovergalleryPageRoutingModule } from './rovergallery-routing.module';

import { RovergalleryPage } from './rovergallery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RovergalleryPageRoutingModule
  ],
  declarations: [RovergalleryPage]
})
export class RovergalleryPageModule {}
