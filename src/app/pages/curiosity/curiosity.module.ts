import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuriosityPageRoutingModule } from './curiosity-routing.module';

import { CuriosityPage } from './curiosity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuriosityPageRoutingModule
  ],
  declarations: [CuriosityPage]
})
export class CuriosityPageModule {}
