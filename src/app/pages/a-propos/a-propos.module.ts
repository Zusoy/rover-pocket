import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AProposPageRoutingModule } from './a-propos-routing.module';

import { AProposPage } from './a-propos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AProposPageRoutingModule
  ],
  declarations: [AProposPage]
})
export class AProposPageModule {}
