import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from './guard/index';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {SingUpComponent} from './sing-up/sing-up.component';
const routes: Routes =[
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
      path: "register",
      component: SingUpComponent,
  },

  {
    path: "login",
    component: AuthenticationComponent,
},

  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
      canActivate: [GuardGuard],
    }]
    
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
