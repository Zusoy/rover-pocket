import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RovergalleryPage } from './rovergallery.page';

const routes: Routes = [
  {
    path: '',
    component: RovergalleryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RovergalleryPageRoutingModule {}
