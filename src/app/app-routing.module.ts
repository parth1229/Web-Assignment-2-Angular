import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from "./auth/auth-guard.service";

const appRoute: Routes  = [
  {path:"", redirectTo:"/profile", pathMatch:"full"},
  {path:"profile", component: ProfileComponent, canActivate:[AuthGuard]},
  {path:"documents", component: ProfileComponent, canActivate:[AuthGuard]},
  {path:"auth", component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
