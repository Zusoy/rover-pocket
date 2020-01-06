import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpiritPageRoutingModule } from './spirit-routing.module';

import { SpiritPage } from './spirit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpiritPageRoutingModule
  ],
  declarations: [SpiritPage]
})
export class SpiritPageModule {}
