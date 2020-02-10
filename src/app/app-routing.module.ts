import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tab1', pathMatch: 'full' },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'spirit',
    loadChildren: () => import('./spirit/spirit.module').then( m => m.SpiritPageModule)
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./a-propos/a-propos.module').then( m => m.AProposPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'mdpperdu',
    loadChildren: () => import('./mdpperdu/mdpperdu.module').then( m => m.MdpperduPageModule)
  },
  {
    path: 'opportunity',
    loadChildren: () => import('./opportunity/opportunity.module').then( m => m.OpportunityPageModule)
  },
  {
    path: 'curiosity',
    loadChildren: () => import('./curiosity/curiosity.module').then( m => m.CuriosityPageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./favoris/favoris.module').then( m => m.FavorisPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
