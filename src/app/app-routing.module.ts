import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'spirit',
    loadChildren: () => import('./pages/spirit/spirit.module').then( m => m.SpiritPageModule)
  },
  {
    path: 'a-propos',
    loadChildren: () => import('./pages/a-propos/a-propos.module').then( m => m.AProposPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'mdpperdu',
    loadChildren: () => import('./pages/mdpperdu/mdpperdu.module').then( m => m.MdpperduPageModule)
  },
  {
    path: 'opportunity',
    loadChildren: () => import('./pages/opportunity/opportunity.module').then( m => m.OpportunityPageModule)
  },
  {
    path: 'curiosity',
    loadChildren: () => import('./pages/curiosity/curiosity.module').then( m => m.CuriosityPageModule)
  },
  {
    path: 'favoris',
    loadChildren: () => import('./pages/favoris/favoris.module').then( m => m.FavorisPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
