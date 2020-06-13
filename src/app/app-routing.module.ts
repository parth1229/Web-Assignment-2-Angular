import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from "./auth/auth-guard.service";
import { HomeComponent } from './home/home.component';

const appRoute: Routes  = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component: HomeComponent, canActivate:[AuthGuard]},
  {path:"profile", component: ProfileComponent, canActivate:[AuthGuard]},
  {path:"documents", component: ProfileComponent, canActivate:[AuthGuard]},
  {path:"auth", component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
