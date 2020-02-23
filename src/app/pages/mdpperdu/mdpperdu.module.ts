import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdpperduPageRoutingModule } from './mdpperdu-routing.module';

import { MdpperduPage } from './mdpperdu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdpperduPageRoutingModule
  ],
  declarations: [MdpperduPage]
})
export class MdpperduPageModule {}
