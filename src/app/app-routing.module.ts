import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
