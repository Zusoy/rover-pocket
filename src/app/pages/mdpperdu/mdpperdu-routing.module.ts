import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdpperduPage } from './mdpperdu.page';

const routes: Routes = [
  {
    path: '',
    component: MdpperduPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdpperduPageRoutingModule {}
