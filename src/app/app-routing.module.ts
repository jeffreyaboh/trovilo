import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule'},
  {
    path: 'signupsuccess',
    loadChildren: () => import('./signupsuccess/signupsuccess.module').then( m => m.SignupsuccessPageModule)
  },
  {
    path: 'signupfailure',
    loadChildren: () => import('./signupfailure/signupfailure.module').then( m => m.SignupfailurePageModule)
  },
  {
    path: 'loginerror',
    loadChildren: () => import('./loginerror/loginerror.module').then( m => m.LoginerrorPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'idea-list',
    loadChildren: () => import('./pages/idea-list/idea-list.module').then( m => m.IdeaListPageModule)
  },
  { path: 'idea', loadChildren: './pages/idea-details/idea-details.module#IdeaDetailsPageModule' },
  { path: 'idea/:id', loadChildren: './pages/idea-details/idea-details.module#IdeaDetailsPageModule' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cloud-list',
    loadChildren: () => import('./cloud-list/cloud-list.module').then( m => m.CloudListPageModule)
  },


 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
